import Book from './Components/Books'
import AddBook from './Components/AddBook'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import UpdateBook from './Components/UpdateBook'


function App() {


  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book/>}/>
          <Route path="/add" element={<AddBook/>}/>
          <Route path="/update/:id" element={<UpdateBook/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
