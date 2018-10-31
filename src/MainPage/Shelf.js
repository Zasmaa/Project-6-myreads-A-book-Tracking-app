import React from 'react';
import Book from "./bookList"
class Shelf extends React.Component{

  render(){
    
    return(
      
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">

{this.props.books.map(book => (
<li key={book.id}><Book 
book={book}
changeShelf={this.props.changeShelf}
/></li>
))}

    
            </ol>
          </div>
        </div>
       

        
      </div>
    
      )
  }
}
export default Shelf
