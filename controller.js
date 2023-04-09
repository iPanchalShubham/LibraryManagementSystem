import mongoose from "mongoose";
import { Book } from "./modal/books.js";
import { User } from "./modal/user.js";

import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).populate("books").exec();
  if (user?.username) {
    if (user?.password === password) {
      user;
      res.json({ status: 200, message: "Authenticated", data: user });
      console.log("authenticated");
      return;
    } else {
      res.json({ status: 401, message: "Authentication failed" });
    }
  } else {
    res.json({ status: 401, message: "user doesn't exist!" });
  }
};

export const getAllBooks = async (req, res) => {
  console.log(req.query.query);
  if (!req.query.query) {
    // Empty object means find all books
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.json({ status: 200, res: allBooks });
    } else {
      res.json({ status: 404 });
    }
  } else {
    const search = {
      $search: {
        index: "name",
        autocomplete: {
          query: `${req.query.query}`,
          path: "name",
        },
      },
    };
    const result = await Book.aggregate([search]).exec();
    res.json({status:200,res:result});
  }
};

export const reserveBook = async (req, res) => {
  const { username, bookId } = req.body;
  const bookObjectId = new mongoose.Types.ObjectId(bookId);
  const user = await User.findOneAndUpdate(
    { username: username },
    { $push: { books: bookObjectId } }
  );
  console.log(bookObjectId);
  if (user?.username) {
    res.json({ status: 201, message: "Book added successfully" });
  } else {
    res.json({ status: 404, message: "Book or user doesn't exist" });
  }
};

export const searchBooks = async (req, res) => {};
