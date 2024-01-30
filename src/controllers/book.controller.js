"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllbooks = void 0;
const client_1 = require("@prisma/client");
const BookClient = new client_1.PrismaClient().book;
// getAllbooks
const getAllbooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield BookClient.findMany();
        res.status(200).json({ data: allBooks });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred!" });
    }
});
exports.getAllbooks = getAllbooks;
// getBookById -> get book by ID
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const bookData = yield BookClient.findUnique({
            where: {
                id: bookId,
            },
        });
        res.status(200).json({ data: bookData });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred!" });
    }
});
exports.getBookById = getBookById;
// createBook
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = req.body;
        const book = yield BookClient.create({
            data: {
                title: bookData.title,
                author: {
                    connect: { id: bookData.authorId },
                },
            },
        });
        res.status(201).json({ data: book });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred while creating book" });
    }
});
exports.createBook = createBook;
// updateBook -> update book by ID
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const bookData = req.body;
        const book = yield BookClient.update({
            where: {
                id: bookId,
            },
            data: bookData,
        });
        res.status(200).json({ data: book });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred while updating book" });
    }
});
exports.updateBook = updateBook;
// deleteBook -> delete by by ID
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const book = yield BookClient.delete({
            where: { id: bookId },
        });
        res.status(200).json({ data: book });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred while deleting book" });
    }
});
exports.deleteBook = deleteBook;
