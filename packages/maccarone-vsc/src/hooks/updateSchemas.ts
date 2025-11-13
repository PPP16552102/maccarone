import { Accents, VSCodeSchemasRoot } from "@/constants/common";
import { repoRoot } from "./constants";
import { writeFile } from "fs/promises";
import { join } from "path";

const customUiColorSchema = (workbenchColors: any) => {
  const validColors = [...Accents, "accent"];

  return {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    additionalProperties: false,
    required: [],
    properties: {
      all: { $ref: "#/$defs/maccaroneWorkbenchColors" },
      lampone: { $ref: "#/$defs/maccaroneWorkbenchColors" },
    },
    $defs: {
      maccaroneColor: {
        anyOf: [
          { enum: ["accent"] },
          { format: "color-hex" },
          {
            type: "string",
            pattern: `^(${validColors.join("|")})\\s\\d\\.\\d+$`,
          },
        ],
      },
      maccaroneWorkbenchColors: {
        type: "object",
        additionalProperties: false,
        required: [],
        properties: workbenchColors,
      },
    },
  };
};

await fetch(`${VSCodeSchemasRoot}workbench-colors.json`)
  .then((data) => data.json())
  .then((data: any) => {
    const workbenchColors = {} as {
      [name: string]: {
        description: string;
        $ref: string;
      };
    };

    for (const [name, { description }] of Object.entries<any>(
      data.properties,
    )) {
      workbenchColors[name] = {
        description,
        $ref: `#/$defs/maccaroneColor`,
      };
    }

    const schema = customUiColorSchema(workbenchColors);
    writeFile(
      join(repoRoot, "schemas/customUIColors.schema.json"),
      JSON.stringify(schema, undefined, 2) + "\n",
      "utf-8",
    );
  });
