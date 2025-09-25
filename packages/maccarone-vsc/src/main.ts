import { ExtensionContext, Uri, window, workspace } from "vscode";
import { ThemePaths } from "./types";
import {
  getConfiguration,
  isDefaultConfig,
  isFreshInstall,
  syncToIconPack,
  updateThemes,
  UpdateTrigger,
} from "./utilities";

export const activate = async (context: ExtensionContext) => {
  const base = context.extensionUri;

  window.showInformationMessage("hello");

  // 主题文件路径
  const paths: ThemePaths = {
    lampone: Uri.joinPath(base, "themes", "lampone.json"),
  };

  const config = getConfiguration();

  if ((await isFreshInstall(context)) && !isDefaultConfig()) {
    updateThemes(config, paths, UpdateTrigger.FRESH_INSTALL);
  }

  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration("maccarone")) {
        updateThemes(getConfiguration(), paths, UpdateTrigger.CONFIG_CHANGE);
      }

      if (
        event.affectsConfiguration("workbench.colorTheme") &&
        config.syncWithIconPack
      ) {
        syncToIconPack();
      }
    }),
    window.onDidChangeActiveColorTheme(() => {
      if (config.syncWithIconPack) {
        syncToIconPack();
      }
    }),
  );

  if (config.syncWithIconPack) syncToIconPack();
};
