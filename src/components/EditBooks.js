import { useState } from "react";
import booksContext from "../context/books";
import { useContext } from "react";
function EditBooks({book, onSubmit})
{
    const {editBook}= useContext(booksContext);
    const[inp, setInp]= useState(book.title);

    const handelSubmit=(event)=>{
        event.preventDefault();
        editBook(book.id,inp);
       onSubmit(book.id,inp);
      
        
    }
    const handelChange=(event)=>{
    
        setInp(event.target.value);
       
    }
return <div>
    <div >
        <form onSubmit={handelSubmit}>
        <input className="input" value={inp} onChange={handelChange}></input>
        <button className="button">Save</button>
        </form>
      </div>
</div>
}

export default EditBooks;