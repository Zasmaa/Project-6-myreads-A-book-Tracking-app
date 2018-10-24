
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
   query : '',
   searchResults : [],

  }
 }


   updateQuery = (query) => {
    this.setState(() => ({ query: query }), this.results(query));
  }

results (query) {
  if (query === ''){
    this.setState ({
      searchResults : []
    });
   
    return;
    
  } 
   // if you have query then fetch the book 

    BooksAPI.search(query).then(results =>{
     console.log(results)
    results instanceof Array
        ? this.setState({ searchResults: results })
        : this.setState({ searchResults: [] });

      
    });


  
};
//credit :  learned these from  both  ryan waite walk through and Maeva walk through : 
//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
//https://www.youtube.com/watch?v=i6L2jLHV9j8
//also drunkenkismet and sara-FEND help me by answering my quesiton on sluck DM. 





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
                this.state.searchResults.map(results =>(
                  <li key={results.id}>
                  <Book book={results}
                  changeShelf={this.props.changeShelf}
                  />
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
