import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book Title is required"],
      trim: true,
      maxLength: [100, "Book Title can not be more than 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Author Name is required"],
      trim: true,
    },
    publishYear: {
      type: Number,
      required: [true, "Publication Year is required"],
      min: [1000, "Year must be atleast 1000"],
      max: [new Date().getFullYear(), "Year cannot be in the future"],
    },
    genre: {
      type: String,
      required: [true, "Book Genre is required"],
      trim: true,
      default: "General",
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", booksSchema);

