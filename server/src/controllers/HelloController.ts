import Express, { Request, Response } from "express";
import { HelloPage } from "../views/pages/HelloPage";
import {HelloStore} from "../stores/HelloStore";

export function HelloController(
  app: Express.Application,
  helloStore: HelloStore
) {
  app.get("/hello", async (req: Request, res: Response) => {
    helloStore.getHello().then((hello: string) => {
      const page = HelloPage(hello);
      res.send(page);
    }).catch((e) => {
      console.error(e)
      res.status(500)
      res.send(e.message)
    })
  });
}
