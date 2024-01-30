import express, { Request, Response, Express } from "express";
import bodyParser from "body-parser";

import authorRouter from "./routes/author.router";
import bookRouter from "./routes/book.router";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Welcome back Neo !" });
});

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ Message: "Pong!" });
});

/** command to run the express server - yarn dev */
app.listen(port, () => {
  console.log(`Application started listening on http://localhost:${port}`);
});
