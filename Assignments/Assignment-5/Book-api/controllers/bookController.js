const Book = require("../models/book");

exports.addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ message: "Book added successfully", data: newBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const filter = {};
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }

    const books = await Book.find(filter).sort({ publishedYear: 1 });

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBook) return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book updated successfully", data: updatedBook });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleteResult = await Book.findByIdAndDelete(req.params.id);

    if (!deleteResult) return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
