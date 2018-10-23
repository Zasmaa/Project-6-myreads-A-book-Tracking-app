import React, {Compoment} from 'react';
import {Link} from 'react-router-dom';
import Book from '../MainPage/bookList'
import Shelf from '../MainPage/Shelf'
import BookShelf from '../MainPage/BookShelf'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends React.Component {
 constructor(props){
  super(props)
   this.state = {
   books :[],
   query : '',
   searchResults : [],

  }
 }
 updateQuery (query) {
  this.setState({query:query}, this.Results);

 }

Results (query) {
  if (this.state.query === ''){
    return this.setState({searchResults: []})
    
  }  
  BooksAPI.search(query).then(searchResults =>{
     console.log(searchResults)
      if (searchResults.error){
        return this.setState({searchResults: []})

      } else {
        return this.setState({searchResults: searchResults})
      }
      
    })
}
//credit :  learned these from  both  ryan waite walk through and Maeva walk through : 
//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
//https://www.youtube.com/watch?v=i6L2jLHV9j8




	render(){

		return(
			<div>

			<div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'> Close </Link>
             <div className="search-books-input-wrapper">
        
                <input type="text" 
                placeholder="Search by title or author"
                value= {this.state.query}
                 onChange = {(event) => this.updateQuery(event.target.value)}

                />


              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid"> 
              {
                this.state.searchResults.map(searchResults =>(
                  <li key={searchResults.id}>
                  <Book book={searchResults}/>
                  </li>

                  ))
              }


              </ol>



            </div>

          </div>



			</div>

			)
 


	}

}

export default SearchPage
