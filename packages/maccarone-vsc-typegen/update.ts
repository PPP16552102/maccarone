import { VscodeSchemasRoot } from "./constants/common";
import { compile, JSONSchema } from "json-schema-to-typescript";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const bannerComment = `/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
 * Instead, run \`pnpm --filter @catppuccin/vsc-typegen typegen:update\` to regenerate this file.
 */`;

const mappings = [
  {
    schema: VscodeSchemasRoot + "workbench-colors.json",
    name: "WorkbenchColors",
    fname: "workbench-colors.d.ts",
    kind: "jsonschema",
  },
  {
    schema:
      "https://raw.githubusercontent.com/usernamehw/vscode-error-lens/v3.24.0/package.json",
    name: "ErrorLensColors",
    fname: "errorlens.d.ts",
    kind: "extension-packagejson",
  },
  {
    schema:
      "https://raw.githubusercontent.com/gitkraken/vscode-gitlens/v16.3.3/package.json",
    name: "GitLensColors",
    fname: "gitlens.d.ts",
    kind: "extension-packagejson",
  },
  {
    schema:
      "https://github.com/microsoft/vscode-pull-request-github/raw/v0.106.0/package.json",
    name: "GitHubPullRequestColors",
    fname: "github-pull-request.d.ts",
    kind: "extension-packagejson",
  },
];

for (const { schema, name, fname, kind } of mappings) {
  console.log(`start fetch ${name}`);
  fetch(schema)
    .then((data) => data.json())
    .then((data) => {
      switch (kind) {
        case "jsonschema": {
          return compile(data as JSONSchema, name, {
            additionalProperties: false,
            bannerComment,
          });
        }
        case "extension-packagejson": {
          return fromVSIXColors(name, data);
        }
        default: {
          throw new Error(`Unknow kind: ${kind}`);
        }
      }
    })
    .then((typeDefs) => {
      writeFileSync(join(__dirname, "types", fname), typeDefs, "utf-8");
    });
}

const fromVSIXColors = (interfaceName: string, data: any) => {
  let content = `${bannerComment}
export interface ${interfaceName} {`;
  data.contributes.colors.map((color: any) => {
    content += `
    /**
     * ${color.description}
     */
    "${color.id}": string;  
`;
  });

  return content + "}\n";
};
