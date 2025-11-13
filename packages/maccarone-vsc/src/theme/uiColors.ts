import { ThemeContext } from "@/types";

export const getUIColors = (
  context: ThemeContext,
): Partial<Record<any, string>> => {
  const { palette, paletteAnsi, options } = context;

  const mainBackground = "";
  const mainForeGround = "#ff7ef4ff";
  const disabled = "#ff588aff";
  const mainHoverBackground = "#e0bcffff";
  const mainBorder = "#cb90ffff";

  const accent = palette[options.accent];

  return {
    // Base Colors
    focusBorder: "#139928",
    foreground: mainForeGround,
    disabledForeground: disabled,
    "widget.border": "#e0bcffff",
    "widget.shadow": "#e0bcffff",
    "selection.background": "#FFAA88",
    descriptionForeground: "#D39",
    errorForeground: "#D39111",
    "icon.foreground": "#999",
    "sash.hoverBorder": "#399",
    "window.activeBorder": "#7e7e7e",
    "window.inactiveBorder": "#333",

    // Text colors
    "textBlockQuote.background": "#eeeeee",
    "textBlockQuote.border": "#D39",
    "textCodeBlock.background": "#eeeeee",
    "textLink.activeForeground": "#D39FFF",
    "textLink.foreground": "#506affff",
    "textPreformat.background": "#ffb7bdff",
    "textPreformat.foreground": "#d39",
    "textSeparator.foreground": "#d39",

    // Action colors
    "toolbar.hoverBackground": mainHoverBackground,
    "toolbar.hoverOutline": "#e47575ce",
    "toolbar.activeBackground": mainHoverBackground,
    "editorActionList.background": "#d39",
    "editorActionList.foreground": "#d39",
    "editorActionList.focusForeground": "#d39",
    "editorActionList.focusBackground": "#d39",

    // Button control
    "button.background": "#cb90ffff",
    "button.foreground": "#ffffff",
    "button.border": "#cb90ffff",
    "button.separator": "#d39",
    "button.hoverBackground": "#d39",

    // Lists and trees
    "list.activeSelectionBackground": mainHoverBackground,
    "list.hoverBackground": "#7e7e7e",

    // Side Bar
    "sideBar.background": "#333333",

    // Editor Groups & Tabs
    "tab.unfocusedActiveBackground": "#333333",

    // Edittor Colors
    "editor.background": "#c0c0c0ff",
  };
};
