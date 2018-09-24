import React from 'react';
import BookShelf from './MainPage/BookShelf';
import SearchPage from './SearchPage/SearchPage';
import bookkList from './MainPage/bookList';
import Shelf from './MainPage/Shelf'
import * as BooksAPI from './BooksAPI'
import {Switch, Route} from 'react-router-dom'
import './App.css'


class BooksApp extends React.Component { 
constructor(props){
  super(props)
   this.state = {
   books :[]
  }

}

componentDidMount(){
  BooksAPI.getAll().then((books) =>{ 
   this.setState({books}) 
  })
}

  render() {
    console.log(this.state.books)
    return (
   <div className="app">
   
   

<Route exact path='/' render={()=>
  <Shelf
      books = {this.state.books}
      />

}
/>
   

}/>

      </div>




      )

      
  }
}

export default BooksApp
