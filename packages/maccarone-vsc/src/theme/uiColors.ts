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
    "button.secondaryForeground": "#d99",
    "button.secondaryBackground": "#d99",
    "button.secondaryHoverBackground": "#222",
    "checkbox.background": "#ffffff",
    "checkbox.foreground": "#ffffff",
    "checkbox.disabled.background": "#7e7e7e",
    "checkbox.disabled.foreground": "#7e7e7e",
    "checkbox.border": mainForeGround,
    "checkbox.selectBackground": mainForeGround,
    "checkbox.selectBorder": mainForeGround,
    "radio.activeForeground": mainForeGround,
    "radio.activeBackground": "#d39",
    "radio.activeBorder": "#d39",
    "radio.inactiveForeground": "#cb90ffff",
    "radio.inactiveBackground": mainHoverBackground,
    "radio.inactiveBorder": "#d39",
    "radio.inactiveHoverBackground": mainHoverBackground,

    // Lists and trees
    "list.activeSelectionBackground": mainHoverBackground,
    "list.hoverBackground": "#7e7e7e",

    // Side Bar
    "sideBar.background": "#333333",

    // Editor Groups & Tabs
    "tab.unfocusedActiveBackground": "#333333",

    // Edittor Colors
    "editor.background": "#3b3b3bff",
  };
};
