import { ThemeContext } from "@/types";

import extensions from "./extensions";
import { Theme } from "@/constants/staticColor";
import { mix, opacity, Transparent } from "@/utils/color";

export const getUIColors = (
  context: ThemeContext,
): Partial<Record<any, string>> => {
  const { primary, white, black, info, danger, success } = Theme;
  const { palette, paletteAnsi, options } = context;

  return {
    // Base Colors
    focusBorder: primary,
    foreground: primary,
    disabledForeground: info,
    "widget.border": primary,
    "widget.shadow": primary,
    "selection.background": primary,
    descriptionForeground: primary,
    errorForeground: primary,
    "icon.foreground": primary,
    "sash.hoverBorder": opacity(primary, 0.8),
    "window.activeBorder": info,
    "window.inactiveBorder": black,

    // Text colors
    "textBlockQuote.background": white,
    "textBlockQuote.border": white,
    "textCodeBlock.background": black,
    "textLink.activeForeground": "#D39FFF",
    "textLink.foreground": primary,
    "textPreformat.background": "#ffb7bdff",
    "textPreformat.foreground": white,
    "textSeparator.foreground": white,

    // Action colors
    "toolbar.hoverBackground": black,
    "toolbar.hoverOutline": "#e47575ce",
    "toolbar.activeBackground": "",
    "editorActionList.background": "#d39",
    "editorActionList.foreground": "#d39",
    "editorActionList.focusForeground": "#d39",
    "editorActionList.focusBackground": "#d39",

    // Button control
    "button.background": primary,
    "button.foreground": white,
    "button.border": Transparent,
    "button.separator": white,
    "button.hoverBackground": opacity(primary, 0.8),
    "button.secondaryForeground": primary,
    "button.secondaryBackground": mix(primary, white, 0.5),
    "button.secondaryHoverBackground": opacity(primary, 0.6),
    "checkbox.background": white,
    "checkbox.foreground": primary,
    "checkbox.disabled.background": info,
    "checkbox.disabled.foreground": danger,
    "checkbox.border": primary,
    "checkbox.selectBackground": primary,
    "checkbox.selectBorder": Transparent,
    "radio.activeForeground": "",
    "radio.activeBackground": "#d39",
    "radio.activeBorder": "#d39",
    "radio.inactiveForeground": "#cb90ffff",
    "radio.inactiveBackground": "",
    "radio.inactiveBorder": "#d39",
    "radio.inactiveHoverBackground": "",

    // dropdown
    "dropdown.background": white,
    "dropdown.listBackground": white,
    "dropdown.border": primary,
    "dropdown.foreground": primary,

    // input
    "input.background": white,
    "input.border": primary,
    "input.foreground": black,
    "input.placeholderForeground": primary,
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
    "scrollbar.background": white,
    "scrollbar.shadow": opacity(primary, 0.5),
    "scrollbarSlider.activeBackground": primary,
    "scrollbarSlider.background": white,
    "scrollbarSlider.hoverBackground": opacity(primary, 0.8),

    // badge
    "badge.foreground": white,
    "badge.background": primary,

    "progressBar.background": primary,

    // Lists and trees
    "list.activeSelectionBackground": opacity(primary, 0.5),
    "list.activeSelectionForeground": white,
    "list.activeSelectionIconForeground": white,
    "list.dropBackground": white,
    "list.hoverBackground": opacity(primary, 0.2),

    // Side Bar
    "sideBar.background": mix(white, primary, 0.05),

    // Editor Groups & Tabs
    "tab.unfocusedActiveBackground": opacity(info, 0.2),

    // Edittor Colors
    "editor.background": white,

    ...extensions(context),
  };
};
