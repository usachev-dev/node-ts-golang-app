"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = require("./pages/home");
const app = express_1.default();
const port = 80;
app.get('/', (req, res) => {
    const page = home_1.HomePage(req);
    res.send(page);
});
app.use('/scripts', express_1.default.static('./client/dist'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
