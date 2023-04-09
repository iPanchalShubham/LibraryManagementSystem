import { Router } from "express";
import { reserveBook, getAllBooks, searchBooks } from "./controller.js";

const booksrouter = Router();

booksrouter.get("/", getAllBooks);
booksrouter.post('/reserveBook',reserveBook)
// booksrouter.post('/unReserveBook',removeUserOfBook)
export default booksrouter;
