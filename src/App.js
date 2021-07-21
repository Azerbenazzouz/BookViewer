import React,{useState} from 'react'
import data from './data'
import Book from './Book'
import './App.css'
function App() {
    const [i,setI]=useState(0)
    const book =data[i]
    return (
        <div>
            <center><h1 className="headTitle">Books</h1></center>
            <br />
            <Book title={book.title} subtitle={book.subtitle} author={book.author} pages={book.pages} description={book.description} website={book.website}/>
            <br />
            <hr />
            <center className="btn">
                <button disabled={i===0} onClick={()=>{setI(0)}}>Début</button>
                <button disabled={i===0} onClick={()=>{setI(i-1)}}>Arrière</button>
                <button disabled={i===data.length-1} onClick={()=>{setI(i+1)}}>Avancer</button>
            </center>

        </div>
    )
}

export default App
