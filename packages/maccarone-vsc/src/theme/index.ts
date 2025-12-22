import {
  MaccaroneFlavor,
  MaccaronePalette,
  MaccaronePaletteAnsi,
  ThemeContext,
} from "@/types";
import { flavors } from "tavolozza";
import { getUIColors } from "./uiColors";
import { getTokenColors } from "./tokenColors";

export const defaultOptions: any = {
  accent: "mauve",
  boldKeywords: true,
  italicComments: true,
  italicKeywords: true,
  colorOverrides: {},
  workbenchMode: "default",
  bracketMode: "rainbow",
  extraBordersEnabled: false,
  customUIColors: {},
  syncWithIconPack: true,
};

export const compileTheme = (
  flavor: MaccaroneFlavor = "lampone",
  options: any = defaultOptions,
) => {
  const flavorData = flavors[flavor];
  const ctpPalette = {} as MaccaronePalette;
  const paletteAnsi = {
    normal: {},
    bright: {},
  } as MaccaronePaletteAnsi;

  for (const [k, v] of flavorData.colorEntries) {
    ctpPalette[k] = v.hex;
  }

  for (const [k, v] of flavorData.ansiColorEntries) {
    paletteAnsi.normal[k] = v.normal.hex;
    paletteAnsi.bright[k] = v.bright.hex;
  }

  const palette: MaccaronePalette = {
    ...ctpPalette,
    ...options.colorOverrides?.all,
    ...options.colorOverrides?.[flavor],
  };

  const context: ThemeContext = {
    flavor,
    palette,
    paletteAnsi,
    options,
  };

  console.log("context -> ", context);

  return {
    name: `Maccarone ${flavorData.name}`,
    type: "light",
    colors: getUIColors(context),
    tokenColors: getTokenColors(context),
  };
};
