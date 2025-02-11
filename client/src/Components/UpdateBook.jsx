import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBook, updateBook } from "../Services/api";

const UpdateBook = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();
  
  const [book, setBook] = useState({
    name: "",
    author: "",
    year: "",
  });
  
  const [error, setError] = useState("");

  // Fetch the book details when the component loads
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBook(id);
        setBook(bookData);
      } catch (err) {
        setError("Failed to fetch book details.");
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!book.name || !book.author || !book.year) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await updateBook(id, book); // Call the updateBook API
      navigate("/"); // Redirect to the books list page after success
    } catch (err) {
      setError("Failed to update book details.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Book</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Book Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={book.name}
            onChange={(e) => setBook({ ...book, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter book name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter author name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={book.year}
            onChange={(e) => setBook({ ...book, year: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter publication year"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
