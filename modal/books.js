import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
  },

  author: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});
export const Book = mongoose.model("Books", schema);
