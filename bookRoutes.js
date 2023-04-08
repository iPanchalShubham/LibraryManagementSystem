import { Router } from "express";
import { getAllBooks } from "./controller.js";

const booksrouter = Router();

booksrouter.get("/", getAllBooks);

export default booksrouter;
