import { ThemeContext } from "@/types";
import base from "./base";
import cpp from "./cpp";

export default function tokens(ctx: ThemeContext) {
  return [...[base, cpp].flatMap((element) => element(ctx))];
}
