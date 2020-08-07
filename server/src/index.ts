import express, {Request, Response} from "express";
import {HomePage} from "./pages/home";
import http from "http";
import sockjs, { Connection } from "sockjs";

const app = express();
const port = 80;

app.get('/', (req: Request, res: Response) => {
    const page = HomePage(req);
    res.send(page);
})

app.use('/public', express.static('./public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})