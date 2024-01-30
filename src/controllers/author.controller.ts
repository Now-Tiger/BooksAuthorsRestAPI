import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const AuthorClient = new PrismaClient().author;

// getAllAuthors
export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const allAuthors = await AuthorClient.findMany({
      include: { book: true },
    });
    res.status(200).json({ data: allAuthors });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: ">> Error occurred" });
  }
};

// getAuthorById
export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const author = await AuthorClient.findUnique({
      where: { id: authorId },
      include: { book: true },
    });
    res.status(200).json({ data: author });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(404).json({ Error: `No author with given id` });
  }
};

// createAuthor
export const createAuthor = async (req: Request, res: Response) => {
  try {
    const authorData = req.body;
    const author = await AuthorClient.create({ data: authorData });
    res.status(201).json({ data: author });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred while creating an author" });
  }
};

// updateAuthor -> byId
export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;
    const author = await AuthorClient.update({
      where: { id: authorId },
      data: authorData,
    });
    res.status(200).json({ data: author });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred while updating an author" });
  }
};

// deleteAuthor -> by Id
export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const author = await AuthorClient.delete({
      where: { id: authorId },
    });
    res.status(200).json({ data: author });
  } catch (e) {
    console.log(`>> Error: ${e}`);
    res.status(400).json({ Error: "Error occurred while deleting an author" });
  }
};
