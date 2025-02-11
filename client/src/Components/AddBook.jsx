import React, { useState } from "react";
import { addBook } from "../Services/api"; // Adjust the import path if needed

const AddBook = () => {
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    year: "",
    image: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!bookData.name || !bookData.author || !bookData.year) {
      setError("Please fill in all the fields.");
      return;
    }

    try {
      await addBook(bookData); // This assumes addBook sends data to the backend
      setBookData({ name: "", author: "", year: "", image: "" });
      setError(""); // Clear any previous error messages
      alert("Book added successfully!");
    } catch (err) {
      setError("Error adding the book. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Book</h1>

      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Book Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-semibold mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-gray-700 font-semibold mb-2"
            >
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={bookData.year}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Image URL (Optional)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={bookData.image}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
