export const VSCodeSchemasRoot =
  "https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/bd18db29edb183a0d8b0b8250b22dbd4428a0da8/resources/vscode/schemas/";

export const Accents = ["red", "green", "yellow", "blue"];

export const Configuration = (version: string) => {
  return {
    title: "Maccarone",
    properties: {
      "maccarone.boldKeywords": {
        scope: "application",
        type: "boolean",
        default: true,
        markdownDescription: "Controls whether to use **bold** for keywords.",
      },
    },
  };
};
