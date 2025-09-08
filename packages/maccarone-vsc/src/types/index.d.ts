import type { Uri } from "vscode";

export type MaccaroneWorkbenchMode = "default" | "flat" | "minimal";
export type MaccaroneBracketMode =
  | "rainbow"
  | "dimmed"
  | "monochromatic"
  | "neovim";

export type ThemePaths = {
  vanille: Uri;
  chocolat: Uri;
};
