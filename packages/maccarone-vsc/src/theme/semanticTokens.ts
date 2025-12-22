import { ThemeContext } from "@/types";

export const getSemanticTokens = (ctx: ThemeContext) => {
  const { palette } = ctx;

  return {
    enumMember: { foreground: "#ffffff" },
    selfKeyword: { foreground: "#ffffff" },
    boolean: { foreground: "#d39" },
    number: { foreground: "#d39" },
    "variable.defaultLibrary": { foreground: "#d39" },

    // Python types
    "class:python": { foreground: "#d39" },
    "class.builtin:python": { foreground: "#d39" },
    "variable.typeHint:python": { foreground: "#d39" },
    "function.decorator:python": { foreground: "#d39" },
  };
};
