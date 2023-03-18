import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import { useContext } from "react";
import { useEffect } from "react";
import booksContext from "./context/books";
function App() {
const {fetchBooks} = useContext(booksContext);
  
 useEffect(()=>{
  fetchBooks();
 },[])
  

  return <div className="app">
          <h1>Reading List</h1>
          <CreateBook />
          <BookList></BookList>
          </div>
}

export default App;
