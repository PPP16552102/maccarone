import { ThemeContext } from "@/types";

const tokens = (ctx: ThemeContext) => {
  return [
    {
      name: "C++ extern keyword",
      scope: "storage.modifier.specifier.extern.cpp",
      settings: {
        foreground: "#ffffff",
      },
    },
  ];
};

export default tokens;
