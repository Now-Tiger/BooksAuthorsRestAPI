import { Router } from "express";
import {
  getAllbooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";

const bookRouter = Router();
bookRouter.get("/", getAllbooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
