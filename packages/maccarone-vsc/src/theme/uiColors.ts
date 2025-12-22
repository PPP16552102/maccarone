import { ThemeContext } from "@/types";

import extensions from "./extensions";

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

    // dropdown
    "dropdown.background": "#51576d",
    "dropdown.listBackground": "#51576d",
    "dropdown.border": "#cb90ffff",
    "dropdown.foreground": "#ffffff",

    // input
    "input.background": "#414559",
    "input.border": "#cb90ffff",
    "input.foreground": "#ffffff",
    "input.placeholderForeground": "#7d849f",
    "inputOption.activeBackground": "#cb90ffff",
    "inputOption.activeBorder": "#cb90ffff",
    "inputOption.activeForeground": "#d39",
    "inputOption.hoverBackground": "#fff",
    "inputValidation.errorBackground": "#e78284",
    "inputValidation.errorForeground": "#ffffff",
    "inputValidation.errorBorder": "#cb90ffff",
    "inputValidation.infoBackground": "#fff",
    "inputValidation.infoForeground": "#333",
    "inputValidation.infoBorder": "#fff",
    "inputValidation.warningBackground": "yellow",
    "inputValidation.warningForeground": "yellow",
    "inputValidation.warningBorder": "yellow",

    //scrollbar control
    "scrollbar.background": "#292c3c",
    "scrollbar.shadow": "#cb90ffff",
    "scrollbarSlider.activeBackground": "#cb90ffff",
    "scrollbarSlider.background": "#fff",
    "scrollbarSlider.hoverBackground": "#a475ceff",

    // badge
    "badge.foreground": "#fff",
    "badge.background": "red",

    "progressBar.background": "#cb90ffff",

    // Lists and trees
    "list.activeSelectionBackground": "#414559",
    "list.activeSelectionForeground": "#ffffff",
    "list.activeSelectionIconForeground": "#ffffff",
    "list.dropBackground": "#fff",
    "list.hoverBackground": "#353 94b",

    // Side Bar
    "sideBar.background": "#292c3c",

    // Editor Groups & Tabs
    "tab.unfocusedActiveBackground": "#333333",

    // Edittor Colors
    "editor.background": "#303446",

    ...extensions(context),
  };
};
