import { Theme } from "@/constants/staticColor";
import { ThemeContext } from "@/types";
import { mix } from "@/utils/color";

const tokens = (ctx: ThemeContext) => {
  const { white, black, primary, warning, success, danger } = Theme;

  return [
    // 普通文本
    {
      name: "Basic text & variable names (incl. leading punctuation)",
      scope: [
        "text",
        "source",
        "variable.other.readwrite",
        "punctuation.definition.variable",
      ],
      settings: {
        foreground: black,
      },
    },
    // 分号
    {
      name: "Parentheses, Brackets, Braces",
      scope: "punctuation",
      settings: {
        foreground: primary,
        fontStyle: "",
      },
    },
    // 注释
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: warning,
        fontStyle: "italic",
      },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: success,
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: danger,
      },
    },
    // 常量数字及布尔
    {
      name: "Booleans, constants, numbers",
      scope: [
        "constant.numeric",
        "variable.other.constant",
        "entity.name.constant",
        "constant.language.boolean",
        "constant.language.false",
        "constant.language.true",
        "keyword.other.unit.user-defined",
        "keyword.other.unit.suffix.floating-point",
      ],
      settings: {
        foreground: primary,
      },
    },
    // 关键字
    {
      scope: [
        "keyword",
        "keyword.operator.word",
        "keyword.operator.new",
        "variable.language.super",
        "support.type.primitive",
        "storage.type",
        "storage.modifier",
        // include punctuation like $ and @ if they're part of the keyword
        "punctuation.definition.keyword",
      ],
      settings: {
        foreground: primary,
        fontStyle: "bold",
      },
    },
    {
      scope: "entity.name.tag.documentation",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Punctuation",
      scope: [
        "keyword.operator",
        "punctuation.accessor",
        "punctuation.definition.generic",
        "meta.function.closure punctuation.section.parameters",
        "punctuation.definition.tag",
        "punctuation.separator.key-value",
      ],
      settings: {
        foreground: warning,
      },
    },
    {
      scope: [
        "entity.name.function",
        "meta.function-call.method",
        "support.function",
        "support.function.misc",
        "variable.function",
      ],
      settings: {
        foreground: primary,
        fontStyle: "italic",
      },
    },
    {
      name: "Classes",
      scope: [
        "entity.name.class",
        "entity.other.inherited-class",
        "support.class",
        "meta.function-call.constructor",
        "entity.name.struct",
      ],
      settings: {
        foreground: mix(primary, success, 0.5),
        fontStyle: "italic",
      },
    },
    {
      name: "Enum",
      scope: "entity.name.enum",
      settings: {
        foreground: warning,
        fontStyle: "italic",
      },
    },
    {
      name: "Enum member",
      scope: [
        "meta.enum variable.other.readwrite",
        "variable.other.enummember",
      ],
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Object properties",
      scope: "meta.property.object",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Types",
      scope: [
        "meta.type",
        "meta.type-alias",
        "support.type",
        "entity.name.type",
      ],
      settings: {
        foreground: warning,
        fontStyle: "italic",
      },
    },
    {
      name: "Decorators",
      scope: [
        "meta.annotation variable.function",
        "meta.annotation variable.annotation.function",
        "meta.annotation punctuation.definition.annotation",
        "meta.decorator",
        "punctuation.decorator",
      ],
      settings: {
        foreground: primary,
      },
    },
    {
      scope: ["variable.parameter", "meta.function.parameters"],
      settings: {
        foreground: danger,
        fontStyle: "italic",
      },
    },
    {
      name: "Built-ins",
      scope: ["constant.language", "support.function.builtin"],
      settings: {
        foreground: danger,
      },
    },
    {
      scope: "entity.other.attribute-name.documentation",
      settings: {
        foreground: danger,
      },
    },
    {
      name: "Preprocessor directives",
      scope: ["keyword.control.directive", "punctuation.definition.directive"],
      settings: {
        foreground: warning,
      },
    },
    {
      name: "Type parameters",
      scope: "punctuation.definition.typeparameters",
      settings: {
        foreground: primary,
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: warning,
      },
    },
    {
      name: "Property names (left hand assignments in json/yaml/css/less)",
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.less",
      ],
      settings: {
        foreground: primary,
        fontStyle: "",
      },
    },
    {
      name: "This/Self keyword",
      scope: [
        "variable.language.this",
        // leading punctuation like $this in PHP
        "variable.language.this punctuation.definition.variable",
      ],
      settings: {
        foreground: danger,
      },
    },
    {
      name: "Object properties",
      scope: "variable.object.property",
      settings: {
        foreground: black,
      },
    },
    {
      name: "String template interpolation",
      scope: ["string.template variable", "string variable"],
      settings: {
        foreground: black,
      },
    },
    {
      name: "`new` as bold",
      scope: "keyword.operator.new",
      settings: {
        fontStyle: "bold",
      },
    },
  ];
};

export default tokens;
