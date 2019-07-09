import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import '../style/App.css';
import '../style/index.css';


function Home(){

  return (
    <div className="home">
      <Jumbotron className="jumbotron-home" >
        <h1 className="home-title">
          Welcome to our library, book lover!
        </h1> 
        <p className ="home-text">
         This is a place where you can get inspired in your lecture. Search for books by title, author or ISBN. 
         Add books to your list for managing them later. 
        </p>
  
        <div >
          <img className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/j-k-rowling-book-quote-1531932701.jpg?crop=1xw:1xh;center,top&resize=*:2601" alt="this is book"></img>

        </div>
      </Jumbotron>
  </div>
  )
}

export default Home;

