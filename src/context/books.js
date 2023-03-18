import {  createContext, useState } from "react";
import axios from 'axios';
const booksContext = createContext();
function Provider ({children}){
    const[books, setBooks]= useState([]);

    const fetchBooks= async()=>{
        const response = await axios.get('http://localhost:3001/books',{});
        setBooks(response.data);
      }

      const bookCreate= async(title)=>{

        const response = await axios.post('http://localhost:3001/books',{
          title
        });
    
        
        const newBooks=[...books,response.data];
        console.log(newBooks);
        setBooks(newBooks);
        
      };
      const deleteBook=async (id)=>{
    
        await axios.delete(`http://localhost:3001/books/${id}`,{});
    
        const newList= books.filter((book)=>{
          return (book.id!==id);
        })
        setBooks(newList);
      }
      const editBook= async(id,title)=>
      {
        const response =await axios.put(`http://localhost:3001/books/${id}`,{
          "title": title
        });
    
          const newBooks= books.map((book)=>{
    
              if(book.id===id)
              {
                return {...book,...response.data}
              }
              return book;
          });
          setBooks(newBooks);
      }
      const obj = {
        books,fetchBooks, bookCreate,deleteBook, editBook
      }

    return(
        <booksContext.Provider value={obj}>{children}</booksContext.Provider>
    )
}
export default booksContext;
export {Provider} ;