import BookShow from "./BookShow";
import booksContext from "../context/books";
import { useContext } from "react";
function BookList() {

       const {books} = useContext(booksContext);
    const List = books.map((book)=>{
        return <BookShow book={book}></BookShow>
        
    })
    return (
      <div className="book-list">{List}</div>
    );
  }
  
  export default BookList;