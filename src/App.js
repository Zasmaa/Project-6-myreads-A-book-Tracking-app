import React from 'react';
import Books from './MainPage/Books';
import SearchPage from './SearchPage/SearchPage';
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'


class BooksApp extends React.Component { 



constructor(props){
  super(props)
   this.state = {
   books :[]
  }

}

componentDidMount(){
  this.getBooksDetails ()
}

getBooksDetails = () => {
  BooksAPI.getAll().then((books) =>{ 
   this.setState({books}) 
  })
}

 changeShelf = (book, shelf) => {
  console.log(book, shelf)
     BooksAPI.update(book, shelf).then( response => {
      const books = this.state.books;
          books.find((b) => b.id === book.id).shelf = shelf;
        this.setState({
         books: books
       })
      })
  }
  updateBook = (book, shelf) => {
     BooksAPI.update(book, shelf).then( response => {
        book.shelf =shelf;
        this.setState(prevState => {
          return {books: prevState.books.concat(book)}
        })
      })
   }



  render() {
  
    return (
   <div className="app">

    <Route exact path='/' render={()=> (
   <Books
  books={this.state.books}
  changeShelf={this.changeShelf}
  />


  )}/>

<Route path= '/search' render={()=>(

    <SearchPage
     books={this.state.books}

        changeShelf={this.updateBook}
       
        />


  )}/>

   </div>
      )    
  }
}


export default BooksApp
