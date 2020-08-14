import Express, { Request, Response } from "express";
import { HelloPage } from "../views/pages/HelloPage";
import { HelloStore } from "../stores/HelloStore";

export function HelloController(
  app: Express.Application,
  helloStore: HelloStore
) {
  app.get("/hello", async (req: Request, res: Response) => {
    const hello = await helloStore.getHello();
    const page = HelloPage(hello);
    res.send(page);
  });
}
