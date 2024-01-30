import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const BookClient = new PrismaClient().book;

// getAllbooks
export const getAllbooks = async (req: Request, res: Response) => {
  try {
    const allBooks = await BookClient.findMany();
    res.status(200).json({ data: allBooks });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred!" });
  }
};

// getBookById -> get book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const bookData = await BookClient.findUnique({
      where: {
        id: bookId,
      },
    });
    res.status(200).json({ data: bookData });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred!" });
  }
};

// createBook
export const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const book = await BookClient.create({
      data: {
        title: bookData.title,
        author: {
          connect: { id: bookData.authorId },
        },
      },
    });
    res.status(201).json({ data: book });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred while creating book" });
  }
};

// updateBook -> update book by ID
export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const bookData = req.body;
    const book = await BookClient.update({
      where: {
        id: bookId,
      },
      data: bookData,
    });
    res.status(200).json({ data: book });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred while updating book" });
  }
};

// deleteBook -> delete by by ID
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await BookClient.delete({
      where: { id: bookId },
    });
    res.status(200).json({ data: book });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred while deleting book" });
  }
};
