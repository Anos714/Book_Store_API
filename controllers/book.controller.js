import { Book } from "../models/books.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    if (!allBooks.length < 0) {
      return res.status(404).json({
        success: false,
        message: "List of Books is Empty",
      });
    } else {
      return res.status(200).json(allBooks);
    }
  } catch (error) {
    console.error("Error Occurred: ", error.message);
    return res.status(500).json({ message: "Server Side Error" });
  }
};

export const getSelectedBook = async (req, res) => {
  try {
    const bookID = req.params.id;
    const getBookByID = await Book.findById(bookID);
    if (!getBookByID) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).json(getBookByID);
    }
  } catch (error) {
    console.error("Error Occurred: ", error.message);
    return res.status(500).json({ message: "Server Side Error" });
  }
};

export const addBook = async (req, res) => {
  try {
    const body = req.body;
    await Book.create(body);
    return res.status(201).json({
      data: body,
      message: "Your Book Added Successfully",
    });
  } catch (error) {
    console.error("Error Occurred: ", error.message);
    return res.status(500).json({ message: "Server Side Error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const bookID = req.params.id;
    const { title, author, publishYear, genre } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookID,
      {
        $set: {
          title: title,
          author: author,
          publishYear: publishYear,
          genre: genre,
        },
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).json({
        data: updatedBook,
        message: "Your Book updated Successfully",
      });
    }
  } catch (error) {
    console.error("Error Occurred: ", error.message);
    return res.status(500).json({ message: "Server Side Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookID);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).json({
        data: deletedBook,
        message: "Your Book Deleted Successfully",
      });
    }
  } catch (error) {
    console.error("Error Occurred: ", error.message);
    return res.status(500).json({ message: "Server Side Error" });
  }
};
