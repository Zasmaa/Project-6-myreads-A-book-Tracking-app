import React from 'react'
import BookShelf from './MainPage/BookShelf';
import searchPage from './SearchPage/searchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
 books:[]
  }

componentDidMount(){
  BooksAPI.getAll().then((books) =>{
   this.setState({books:books}) 
  })
}

  render() {
    return (
      <div className="app">
      
    <Shelf
      books = {this.state.Books}
      />
          
      </div>
    )
  }
}

export default BooksApp
