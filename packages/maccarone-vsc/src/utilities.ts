import {
  ColorThemeKind,
  commands,
  ConfigurationTarget,
  ExtensionContext,
  FilePermission,
  Uri,
  window,
  workspace,
} from "vscode";
import { flavorEntries } from "tavolozza";
import { compileTheme, defaultOptions } from "./theme";
import type {
  ColorOverrides,
  CustomUIColors,
  MaccaroneAccent,
  MaccaroneBracketMode,
  MaccaroneWorkbenchMode,
  ThemeOptions,
  ThemePaths,
} from "./types";

export enum UpdateTrigger {
  CONFIG_CHANGE = "Configuration changed",
  FRESH_INSTALL = "Update detected",
}

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

const filterObject = <T extends object>(
  object: T,
  function_: (entry: Entry<T>, index: number, array: Entry<T>[]) => boolean,
) => {
  return Object.fromEntries(
    (Object.entries(object) as Entry<T>[]).filter((element, index, array) => {
      function_(element, index, array);
    }),
  ) as Partial<T>;
};

const writeThemeFile = async (uri: Uri, data: unknown): Promise<void> => {
  return workspace.fs
    .writeFile(uri, Buffer.from(JSON.stringify(data, undefined, 2)))
    .then(
      () => {},
      (error) => {
        window.showErrorMessage(error.message);
      },
    );
};

const fileExits = async (uri: Uri): Promise<boolean> => {
  return workspace.fs.stat(uri).then(
    () => true,
    () => false,
  );
};

export const LOG = window.createOutputChannel("Maccarone Theme", { log: true });

export const promptToReload = (trigger: UpdateTrigger) => {
  const message = `Maccarone: ${trigger} - Reload Required.`;
  const action = "Reload Window";
  window.showInformationMessage(message, action).then((selectedAction) => {
    if (selectedAction === action)
      commands.executeCommand("workbench.action.reloadWindow");
  });
};

export const isMutable = async (uri: Uri): Promise<boolean> => {
  return workspace.fs.stat(uri).then(
    (stat) => stat.permissions !== FilePermission.Readonly,
    (error) => error,
  );
};

export const isFreshInstall = async (
  context: ExtensionContext,
): Promise<boolean | "error"> => {
  LOG.info("Checking if maccarone is installed for the first time.");
  const flagUri = Uri.file(context.asAbsolutePath("themes/.flag"));
  if (await fileExits(flagUri)) {
    LOG.info("Maccarone has been installed before.");
    return false;
  } else {
    LOG.info("Maccarone is installed for the first time!");
    return workspace.fs.writeFile(flagUri, Buffer.from("")).then(
      () => true,
      () => "error",
    );
  }
};

export const isDefaultConfig = (): boolean => {
  LOG.info("Checking if maccarone is using default config.");
  const state =
    JSON.stringify(getConfiguration()) === JSON.stringify(defaultOptions);
  LOG.info(`Maccarone is using ${state ? "default" : "custom"} config.`);
  return state;
};

export const getConfiguration = (): any => {
  const config = workspace.getConfiguration("maccarone");
  const options = {
    accent: config.get<MaccaroneAccent>("accentColor"),
    boldKeywords: config.get<boolean>("boldKeywords"),
    italicKeywords: config.get<boolean>("italicKeywords"),
    italicComments: config.get<boolean>("italicComments"),
    colorOverrides: config.get<ColorOverrides>("colorOverrides"),
    workbenchMode: config.get<MaccaroneWorkbenchMode>("workbenchMode"),
    bracketMode: config.get<MaccaroneBracketMode>("bracketMode"),
    extraBordersEnabled: config.get<boolean>("extraBordersEnabled"),
    customUIColors: config.get<CustomUIColors>("customUIColors"),
    syncWithIconPack: config.get<boolean>("syncWithIconPack"),
  } satisfies Partial<ThemeOptions>;

  return {
    ...defaultOptions,
    ...filterObject(options, ([, value]) => value !== undefined),
  };
};

export const updateThemes = (
  options: ThemeOptions,
  paths: ThemePaths,
  trigger: UpdateTrigger,
) => {
  const flavors = flavorEntries.map(([flavorName]) => flavorName);

  const promises = flavors.map(async (flavor): Promise<void> => {
    const theme = compileTheme(flavor, options);
    return writeThemeFile(paths[flavor], theme);
  });

  Promise.all(promises)
    .then(() => {
      promptToReload(trigger);
    })
    .catch((error) => {
      window.showErrorMessage(
        "Failed to save re-compiled theme: \n" + error.message,
      );
    });
};

const getActiveTheme = (): string => {
  const workbench = workspace.getConfiguration("workbench");
  const autoDetectColorSchema = workspace
    .getConfiguration("window")
    .get<boolean>("autoDetectColorSchema");

  if (autoDetectColorSchema) {
    const prefs = {
      [ColorThemeKind.Light]: "preferredLightColorTheme",
      [ColorThemeKind.Dark]: "preferredDarkColorTheme",
      [ColorThemeKind.HighContrastLight]:
        "preferredHighContrastLightColorTheme",
      [ColorThemeKind.HighContrast]: "preferredHighContrastColorTheme",
    };

    return workbench.get<string>(prefs[window.activeColorTheme.kind]) ?? "";
  } else {
    return workbench.get<string>("colorTheme") ?? "";
  }
};

export const syncToIconPack = () => {
  const id = 'maccarone.maccarone-vsc-icons"';

  const uiThemesToIconThemes = {
    "Maccarone Lampone": "maccarone-lampone",
  };

  const uiTheme = getActiveTheme();
  const ctpThemeActive = Object.keys(uiThemesToIconThemes).includes(uiTheme);

  const ctpIconsActive = Object.values(uiThemesToIconThemes).includes(
    workspace.getConfiguration("workbench").get<string>("iconTheme") ?? "",
  );

  if (ctpThemeActive && ctpIconsActive) {
    const iconTheme =
      uiThemesToIconThemes[uiTheme as keyof typeof uiThemesToIconThemes];
    workspace
      .getConfiguration("workbench")
      .update("iconTheme", iconTheme, ConfigurationTarget.Global);
  }
};
