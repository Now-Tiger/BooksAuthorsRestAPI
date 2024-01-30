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
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAllAuthors = void 0;
const client_1 = require("@prisma/client");
const AuthorClient = new client_1.PrismaClient().author;
// getAllAuthors
const getAllAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAuthors = yield AuthorClient.findMany({
            include: { book: true },
        });
        res.status(200).json({ data: allAuthors });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: ">> Error occurred" });
    }
});
exports.getAllAuthors = getAllAuthors;
// getAuthorById
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorId = req.params.id;
        const author = yield AuthorClient.findUnique({
            where: { id: authorId },
            include: { book: true },
        });
        res.status(200).json({ data: author });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(404).json({ Error: `No author with given id` });
    }
});
exports.getAuthorById = getAuthorById;
// createAuthor
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorData = req.body;
        const author = yield AuthorClient.create({ data: authorData });
        res.status(201).json({ data: author });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred while creating an author" });
    }
});
exports.createAuthor = createAuthor;
// updateAuthor -> byId
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorId = req.params.id;
        const authorData = req.body;
        const author = yield AuthorClient.update({
            where: { id: authorId },
            data: authorData,
        });
        res.status(200).json({ data: author });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred while updating an author" });
    }
});
exports.updateAuthor = updateAuthor;
// deleteAuthor -> by Id
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorId = req.params.id;
        const author = yield AuthorClient.delete({
            where: { id: authorId },
        });
        res.status(200).json({ data: author });
    }
    catch (e) {
        console.log(`>> Error: ${e}`);
        res.status(400).json({ Error: "Error occurred while deleting an author" });
    }
});
exports.deleteAuthor = deleteAuthor;
