import React from "react";
//import {getBooks,addBook, uploadBook, deleteBook} from "../Services/api";
const Book =() =>{
    return (
        <div>
            <labe for="name">Book Name</labe>
            <input type="text" placeholder="Enter book name" /><br></br>
            <labe for="author">Author Name</labe>
            <input type="text" placeholder="Enter author name" />
            <br></br>
            <button>Search</button>
        </div>
    )
}

export default Book;