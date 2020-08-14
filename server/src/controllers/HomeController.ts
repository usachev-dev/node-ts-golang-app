import Express, { Request, Response } from "express";
import { HomePage } from "../views/pages/HomePage";

export function HomeController(app: Express.Application) {
  app.get("/", (req: Request, res: Response) => {
    const page = HomePage();
    res.send(page);
  });
}
