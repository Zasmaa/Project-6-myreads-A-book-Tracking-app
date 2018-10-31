import React from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'
class BookShelf extends React.Component{

constructor(props){

  super(props);
  this.state={
    racks: [
  {title: "Currently Reading" , handle : "currentlyReading"},
  {title: "Want to Read", handle : "wantToRead"},
  { title: "Read", handle : "read"}


  ]
  }
}

  render() {
    return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">
      <div>

  

      <Shelf
       title ="Currently Reading" books= {(this.props.books.filter(book => book.shelf === "currentlyReading"))} changeShelf={this.props.changeShelf}/>
      <Shelf
      title ="Want to Read" books= {(this.props.books.filter(book => book.shelf === "wantToRead"))} changeShelf={this.props.changeShelf}/>
      <Shelf
      title ="Read" books= {(this.props.books.filter(book => book.shelf === "read"))} changeShelf={this.props.changeShelf}/>
        
        
        
      </div>
    </div>

    <div className="open-search">
      <Link to ='/search'>Add a book</Link>
    </div>
  </div>
      );
  }
}


  

      
export default BookShelf
