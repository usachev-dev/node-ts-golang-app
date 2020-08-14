import express from "express";
import { HomeController, HelloController } from "./controllers";
import { hello } from "../../shared/hello";
import { HelloStoreMemory } from "./stores/HelloStore";
import config from "../../shared/config";

const app = express();
const port = 80;
console.log("hello world server specific");
hello();

const helloStore = new HelloStoreMemory(config.hello);

HomeController(app);
HelloController(app, helloStore);

app.use("/public", express.static("./public"));

app.listen(port, () => {
  console.log(`Http listening at http://localhost:${port}`);
});
