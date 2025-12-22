import { ThemeContext } from "@/types";
import cpp from "./cpp";

export default function tokens(ctx: ThemeContext) {
  return [
    {
      name: "Basic text & variable names (incl. leading punctuation)",
      scope: [
        "text",
        "source",
        "variable.other.readwrite",
        "punctuation.definition.variable",
      ],
      settings: {
        foreground: "#ffffff",
      },
    },
    ...[cpp],
  ];
}
