import express from "express";
import {
  getAllBooks,
  getSelectedBook,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
export const router = express.Router();

//routes
//1. get all Books
router.get("/get", getAllBooks);

//2. get a selected book
router.get("/get/:id", getSelectedBook);

//3. add a book
router.post("/add", addBook);

//4. update a book
router.put("/update/:id", updateBook);

//5. delete a book
router.delete("/delete/:id", deleteBook);
