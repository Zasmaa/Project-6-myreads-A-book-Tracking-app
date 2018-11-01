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


  
  updateQuery = query => {
    if (query === "") {
      this.setState({
        searchFinding: []
      });
      return;
    } 
   
  
    BooksAPI.search(query).then(results => {
      results instanceof Array
        ? this.setState({ searchFinding: results })
        : this.setState({ searchFinding: [] });


    });
    
  };
 
  handleChange = e => {
    this.setState({ query: e });
    this.updateQuery(e);
  };
 


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
                onChange={event => this.handleChange(event.target.value)}
              />
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
