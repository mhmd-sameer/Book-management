import axios from 'axios';

const API_URL = 'http://localhost:5000/Book';

// Fetch all books
export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Add a new book
export const addBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Delete a book by ID
export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

// Update a book by ID
export const updateBook = async (book) => {
    console.log(book);
  try {
    const response = await axios.put(`${API_URL}/${book.id}`, book);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Get a single book by ID
export const getBook = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
