import path from "path";
import pug from "pug";

const template = pug.compileFile(
  path.resolve(__dirname, "../../templates", "HelloPage.pug")
);

export function HelloPage(hello: string): string {
  return render({ hello });
}

function render(args: { hello: string }): string {
  return template(args);
}
