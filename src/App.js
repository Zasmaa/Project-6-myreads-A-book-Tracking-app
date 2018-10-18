import React from 'react';
import BookShelf from './MainPage/BookShelf';
import SearchPage from './SearchPage/SearchPage';
import bookkList from './MainPage/bookList';
import Shelf from './MainPage/Shelf'
import * as BooksAPI from './BooksAPI'
import {Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
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
changeShelf =(book, shelf) => {
  BooksAPI.update (book, shelf);
  BooksAPI.getAll().then((books) =>{ 
   this.setState({books}) 
  })
}

  render() {
    console.log(this.state.books)
    return (
   <div className="app">
   
   

<Route exact path='/' render={()=> 
  <BookShelf
  books={this.state.books}
  changeShelf={this.changeShelf}
  />
}
/>
<Route exact path= '/' render ={()=>
  <SearchPage/>
}/>
   


      </div>




      )

      
  }
}


export default BooksApp


