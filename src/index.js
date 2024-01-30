"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const author_router_1 = __importDefault(require("./routes/author.router"));
const book_router_1 = __importDefault(require("./routes/book.router"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/authors", author_router_1.default);
app.use("/books", book_router_1.default);
app.get("/", (req, res) => {
    res.status(200).json({ Message: "Welcome back Neo !" });
});
app.get("/ping", (req, res) => {
    res.status(200).json({ Message: "Pong!" });
});
/** command to run the express server - yarn dev */
app.listen(port, () => {
    console.log(`Application started listening on http://localhost:${port}`);
});
