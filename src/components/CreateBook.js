import { useState } from "react";
import booksContext from "../context/books";
import { useContext } from "react";
function CreateBook() {

    const {bookCreate} = useContext(booksContext);
   const[inp, setInp]= useState('');

    const handelSubmit=(event)=>{
        event.preventDefault();
       setInp('')
       bookCreate(inp);
        
    }
    const handelChange=(event)=>{
    
        setInp(event.target.value);
       
    }
    return <div className="book-create">
        <form onSubmit={handelSubmit}>
        <input className="input" value={inp} onChange={handelChange}></input>
        <button className="button">Create Book</button>
        </form>
      </div>;
    
  }
  
  export default CreateBook;