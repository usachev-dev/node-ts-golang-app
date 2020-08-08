import { Request, Response } from "express";
import path from "path";
import pug from "pug";

const template = pug.compileFile(
  path.resolve(__dirname, "../templates", "game.pug")
);

export function GamePage(req: Request): string {
  return render({});
}

function render(args: {}): string {
  return template(args);
}
