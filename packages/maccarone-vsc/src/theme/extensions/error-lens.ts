import { type ThemeContext } from "@/types";

export default function colors(context: ThemeContext): any {
  const { palette } = context;

  return {
    "errorLens.errorBackground": "red",
    "errorLens.errorBackgroundLight": "red",
    "errorLens.errorForeground": "red",
    "errorLens.errorForegroundLight": "red",
    "errorLens.errorMessageBackground": "red",
    "errorLens.hintBackground": "red",
    "errorLens.hintBackgroundLight": "red",
    "errorLens.hintForeground": "red",
    "errorLens.hintForegroundLight": "red",
    "errorLens.hintMessageBackground": "red",
    "errorLens.infoBackground": "red",
    "errorLens.infoBackgroundLight": "red",
    "errorLens.infoForeground": "red",
    "errorLens.infoForegroundLight": "red",
    "errorLens.infoMessageBackground": "red",
    "errorLens.statusBarErrorForeground": palette.red,
    "errorLens.statusBarHintForeground": palette.green,
    "errorLens.statusBarIconErrorForeground": palette.red,
    "errorLens.statusBarIconWarningForeground": palette.peach,
    "errorLens.statusBarInfoForeground": palette.blue,
    "errorLens.statusBarWarningForeground": palette.peach,
    "errorLens.warningBackground": "red",
    "errorLens.warningForeground": "red",
    "errorLens.warningForegroundLight": "red",
    "errorLens.warningMessageBackground": "red",
  };
}
