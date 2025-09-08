import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { repoRoot } from "./constants";

const getConfiguration = (version: string) => {
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

export const readPackageJsonVersion = async () => {
  return await readFile(join(repoRoot, "package.json"), "utf8").then((data) => {
    const json = JSON.parse(data);
    return json.version;
  });
};

export const updatePackageJson = async () => {
  return await readFile(join(repoRoot, "package.json"), "utf8")
    .then((data) => JSON.parse(data))
    .then((data) => {
      return {
        ...data,
        contributes: {
          ...data.contributes,
          configuration: getConfiguration(data.version),
        },
      };
    })
    .then((data) => {
      writeFile(
        join(repoRoot, "package.json"),
        JSON.stringify(data, undefined, 2) + "\n",
        "utf8",
      );
      return data;
    });
};
