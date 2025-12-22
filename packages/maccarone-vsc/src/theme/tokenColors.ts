import { ThemeContext } from "@/types";
import tokens from "./tokens";

export const getTokenColors = (ctx: ThemeContext) => {
  return tokens(ctx).map((token) => {
    if (token.name === "Comments") return token;

    return token;
  });
};
