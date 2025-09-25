import { ThemeContext } from "@/types";

export const getUIColors = (
  context: ThemeContext,
): Partial<Record<any, string>> => {
  const { palette, paletteAnsi, options } = context;

  const accent = palette[options.accent];
};
