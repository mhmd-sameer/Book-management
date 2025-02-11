import React, { useState, useEffect } from "react";
import { getBooks, deleteBook } from "../Services/api";
import { Link } from "react-router-dom"; // Import Link for navigation

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  // Handle Delete
  const handleDelete = async (bookId) => {
    await deleteBook(bookId);
    // After deletion, fetch the updated books list
    const booksData = await getBooks();
    setBooks(booksData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Library Books</h1>

      {/* Add Book Button */}
      <Link
        to="/add-book"
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 mb-6"
      >
        Add New Book
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={book.image || "https://via.placeholder.com/150"}
                alt={book.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{book.name}</h3>
                <p className="text-gray-600 mt-2">{book.author}</p>
                <p className="text-gray-500 mt-2">{book.year}</p>
              </div>

              {/* Update and Delete Buttons */}
              <div className="p-4 flex justify-between">
                {/* Update Button */}
                <Link
                  to={`/update/${book._id}`}
                  className="bg-yellow-500 text-white py-1 px-4 rounded-lg hover:bg-yellow-600"
                >
                  Update
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full text-gray-500">
            No books available
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
