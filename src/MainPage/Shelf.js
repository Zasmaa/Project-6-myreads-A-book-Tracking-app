import React, {component} from 'react';
import Book from "./bookList"
import BookShelf from './BookShelf';

class Shelf extends React.Component{
  render(){
    return(

      
      <div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">



      {this.props.books.map(book => (
<li key={book.id}>
<Book 
book={book}

/>
</li>
))}

              


            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">


    
            </ol>
          </div>
        </div>
        
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
             

    

            </ol>
          </div>
        </div>
      </div>
    
      )
  }
}
export default Shelf