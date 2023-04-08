import express from "express";
import "./DB.js";
import cors from "cors";
import router from "./appRoutes.js";
import dotenv from "dotenv";
import booksrouter from "./bookRoutes.js";
dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Library Management System" });
});

app.use("/books", booksrouter);
app.use("/user", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
