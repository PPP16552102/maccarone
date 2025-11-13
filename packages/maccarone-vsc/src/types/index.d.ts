import type { AccentName, Colors, AnsiColors, FlavorName } from "tavolozza";

import type { Uri } from "vscode";

export type * from "maccarone-vsc-typegen/types/textmate-colors";
export type * from "maccarone-vsc-typegen/types/workbench-colors";
export type * from "maccarone-vsc-typegen/types/token-styling";

export type * from "maccarone-vsc-typegen/types/errorlens";
export type * from "maccarone-vsc-typegen/types/github-pull-request";
export type * from "maccarone-vsc-typegen/types/gitlens";

export type MaccaroneAccent = AccentName;
export type MaccaroneFlavor = FlavorName;
export { type ColorName } from "tavolozza";
export type MaccaroneWorkbenchMode = "default" | "flat" | "minimal";
export type MaccaroneBracketMode =
  | "rainbow"
  | "dimmed"
  | "monochromatic"
  | "neovim";

export type MaccaronePalette = Colors<string>;
export type MaccaronePaletteAnsi = {
  normal: AnsiColors<string>;
  bright: AnsiColors<string>;
};

type FlavorsPlusAll<T> = { all: T } & { [k in MaccaroneFlavor]: T };

export type ColorOverrides = Partial<FlavorsPlusAll<Partial<MaccaronePalette>>>;

export type CustomUIColors = Partial<FlavorsPlusAll<Record<string, string>>>;

export type ThemeOptions = {
  accent?: MaccaroneAccent;
  italicComments: boolean;
  italicKeywords: boolean;
  boldKeywords: boolean;
  colorOverrides: Color;
  workbenchMode: MaccaroneWorkbenchMode;
  bracketMode: MaccaroneBracketMode;
  extraBordersEnabled: boolean;
  customUIColors: CustomUIColors;
  syncWithIconPack: boolean;
};

export type ThemePaths = {
  lampone: Uri;
};

export type ThemeContext = {
  flavor: MaccaroneFlavor;
  palette: MaccaronePalette;
  paletteAnsi: MaccaronePaletteAnsi;
  options: ThemeOptions;
};

// export type VscodeThemeColors = {
//   // Contrast colors
//   contrastActiveBorder: string;
//   contrastBorder: string;

//   // Base colors
//   focusBorder: string;
//   foreground: string;
//   "widget.border": string;
//   "widget.shadow": string;
//   "selection.background": string;
//   descriptionForeground: string;
//   errorForeground: string;
//   "icon.foreground": string;
//   "sash.hoverBorder": string;

//   // Window border
//   "window.activeBorder": string;
//   "window.inactiveBorder": string;

//   // Text colors
//   "textBlockQuote.background": string;
//   "textBlockQuote.border": string;
//   "textCodeBlock.background": string;
//   "textLink.activeForeground": string;
//   "textLink.foreground": string;
//   "textPreformat.foreground": string;
//   "textPreformat.background": string;
//   "textSeparator.foreground": string;

//   // Action colors
//   "toolbar.hoverBackground": string;
//   "toolbar.hoverOutline": string;
//   "toolbar.activeBackground": string;
//   "editorActionList.background": string;
//   "editorActionList.foreground": string;
// };
