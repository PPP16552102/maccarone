import { ExtensionContext, Uri, window } from "vscode";
import { ThemePaths } from "./types";
import { getConfiguration } from "./utilities";

export const activate = (context: ExtensionContext) => {
  const base = context.extensionUri;

  // 主题文件路径
  const paths: ThemePaths = {
    vanille: Uri.joinPath(base, "themes", "vanille.json"),
    chocolat: Uri.joinPath(base, "themes", "chocolat.json"),
  };

  const config = getConfiguration();
};

export const deactivate = () => {};
