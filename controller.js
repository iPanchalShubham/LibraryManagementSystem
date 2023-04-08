import { Book } from "./modal/books.js";
import { User } from "./modal/user.js";

import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user?.username) {
    if (user?.password === password) {
      res.json({ message: "Authenticated" });
      console.log("authenticated");
      return;
    } else {
      res.json({ message: "Authentication failed" });
    }
  } else {
    res.json({ message: "user doesn't exist!" });
  }
};


export const getAllBooks  = async (req,res)=>{
    // Empty object means find all books
        const allBooks = await Book.find({})
        if(allBooks.length>0){
          res.json({status:200,res:allBooks})
        }else{
          res.json({status:404})
        }
}