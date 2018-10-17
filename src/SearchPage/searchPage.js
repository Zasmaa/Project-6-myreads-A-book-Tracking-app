
import React, {Compoment} from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class SearchPage extends React.Component {
	render(){
constructor(props){
  super(props)
   this.state = {
   books :[]
   query : ''
   searchResult :[]
  }

}

componentDidMount(){
  BooksAPI.getAll().then((books) =>{ 
   this.setState({books}) 
  })
}
updataQuery = (query) => {
  this.setState({query : query
  })
}
Searchinput = (query) =>{
  BooksAPI.search(query.then(searchResult)=>{
    this.setState({searchResult: searchResult})
  })
}
changeShelf =(book, shelf) => {
  BooksAPI.update (book, shelf);
  BooksAPI.getAll().then((books) =>{ 
   this.setState({books}) 
  })
}





		return(
			<div>

			<div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'> Close </Link>
             <div className="search-books-input-wrapper">
        
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>

          </div>



			</div>

			)
 


	}

}

export default SearchPage;
