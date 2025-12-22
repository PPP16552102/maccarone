import tinycolor from "tinycolor2";

export const mix = (color1: string, color2: string, amount: number) =>
  tinycolor.mix(color1, color2, amount * 100).toHexString();

export const opacity = (color: string, opacity: number) =>
  tinycolor(color).setAlpha(opacity).toHex8String();

export const shade = (color: string, magnitude: number) =>
  magnitude > 0
    ? tinycolor(color)
        .lighten(magnitude * 100)
        .toHexString()
    : tinycolor(color)
        .darken(Math.abs(magnitude * 100))
        .toHexString();

export const Transparent = "#00000000";
