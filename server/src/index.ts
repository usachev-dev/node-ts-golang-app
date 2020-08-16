import express from "express";
import { HomeController, HelloController } from "./controllers";
import { hello } from "../../shared/hello";
import {HelloStoreApi, HelloStoreMemory} from "./stores/HelloStore";
import config from "../../shared/config";

const app = express();
const port = 88;
console.log("hello world server specific");
hello();

const helloStore = new HelloStoreApi("http://api:8080");

HomeController(app);
HelloController(app, helloStore);

app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}`);
});
