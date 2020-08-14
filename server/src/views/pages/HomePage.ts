import { Request, Response } from "express";
import path from "path";
import pug from "pug";

const template = pug.compileFile(
  path.resolve(__dirname, "../../templates", "HomePage.pug")
);

export function HomePage(): string {
  return render();
}

function render(): string {
  return template();
}
