import { Request, Response } from "express";
import path from "path";
import pug from "pug";

const template = pug.compileFile(
  path.resolve(__dirname, "../templates", "home.pug")
);

export function HomePage(req: Request): string {
  return render({});
}

function render(args: {}): string {
  return template(args);
}
