import React from 'react'

const Books = () => {
  const[books,setBooks] = useState("");

  const getAllBooks = async () =>{
    const datas = await getBooks();
  }
  return (
    <div>
      
    </div>
  )
}

export default Books
