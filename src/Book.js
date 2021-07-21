import React from 'react'
import './Book.css'
function Book({title,subtitle,author,pages,description,website}) {
    return (
        <div className="Book">
            <h1>Title : {title}</h1>
            <h2>Subtitle : {subtitle}</h2>
            <h4>Author : {author}</h4>
            <h4>Pages : {pages}</h4>
            <p>Description : {description}</p>
            <a href={website}>Oficial website</a>
        </div>
    )
}

export default Book
