import { useState } from "react";
import EditBooks from "./EditBooks";
import booksContext from "../context/books";
import { useContext } from "react";
function BookShow({book}) {
    const {deleteBook} = useContext(booksContext);
    const[editMode, setEditMode]= useState(false);
    const handelDeleteClick=()=>
    {
        deleteBook(book.id);
    }
    let content= book.title;
    
    const handelEditClick=()=>{
        setEditMode(true);
    }

    const onSubmit=()=>{
        setEditMode(false);
       }
    if(editMode)
    {
        content= <EditBooks book={book} onSubmit={onSubmit}></EditBooks>
    }
    return (
      <div className="book-show">
        <img alt="rendom" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
       {content} 
       <div className="actions">
        <button className="delete" onClick={handelDeleteClick}></button>
        <button className="edit" onClick={handelEditClick} ></button>
        </div>
      </div>
    );
  }
  
  export default BookShow;