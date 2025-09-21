import { commands, Uri, window, workspace } from "vscode";
import { version } from "tavolozza";

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

export const getConfiguration = (): any => {
  const config = workspace.getConfiguration("maccarone");
  console.log("config ->", config);
  const options = {};
};
