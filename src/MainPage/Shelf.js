import React, {component} from 'react';
import Book from "./bookList"
import BookShelf from './BookShelf';


class Shelf extends React.Component{
  componentDidMount(){
    console.log(this)
}
  render(){
    
    return(
      
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">

{this.props.books.map(book => (
<li key={book.id}><Book /></li>
))}

    
            </ol>
          </div>
        </div>
       

        
      </div>
    
      )
  }
}
export default Shelf
