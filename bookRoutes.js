import { Router } from "express";
import { reserveBook, getAllBooks, unReserveBook } from "./controller.js";

const booksrouter = Router();

booksrouter.get("/", getAllBooks);
booksrouter.post('/reserveBook',reserveBook)
booksrouter.post('/unReserveBook',unReserveBook)
export default booksrouter;
