import React from "react";
import { Link } from "react-router-dom";
import Book from "../MainPage/List";

import * as BooksAPI from "../BooksAPI";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchFinding: []
    };
  }

componentDidMount() {
      BooksAPI.getAll()
      .then(response => {
         this.setState({books:response});
      })
   }

 updateQuery = (query) => {
  this.setState({query:query}, this.seachBooks)
 }
  
  seachBooks(){
    if(this.state.query === '' || this.state.query === undefined){
      return this.setState({searchFinding: []})
    }
    BooksAPI.search(this.state.query).then(searchFinding => {
      if (searchFinding.error) {
        return this.setState({searchFinding: []})
      }
      else{
        searchFinding.forEach(b =>{
let finding = this.state.books.filter(B => B.id === b.id)
if (finding[0]) {b.shelf =finding[0].shelf}
        })
return this.setState({searchFinding: searchFinding})
      }
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
 


  //credit :  learned these from  both  ryan waite walk through and Maeva walk through : 
//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
//https://www.youtube.com/watch?v=i6L2jLHV9j8
//also drunkenkismet and sara-FEND help me by answering my quesiton on sluck DM. 

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              {" "}
              Close{" "}
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
               value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)} />
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
            {
                this.state.searchFinding.map(results =>{
                  let Shelf = "none"

                  this.props.books.map(book => (
                    book.id === results.id ?
                    Shelf = book.Shelf :
                    ''
                    ));


                  return (
                     <li key={results.id}>
                  <Book book={results}
                  changeShelf={this.props.changeShelf}
                  
                  currentShelf = {Shelf}
                  
                  />
                  </li>

                    )
                })
              }



              

            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
