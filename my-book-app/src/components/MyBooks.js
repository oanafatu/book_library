import React from 'react';
import {Alert, ListGroup, Jumbotron} from 'react-bootstrap';
import ListItem from './ListItem';

function YourBooks(){
  
  let myBooksArr = window.localStorage.getItem('myBooks') ? JSON.parse(window.localStorage.getItem('myBooks')).myBooksArr : [];

    return (
      <div className="my-books">
        <Jumbotron className="jumbotron">
          <h1>This is your list, book lover!</h1>
          <p>
            Feel free to refine your list by removing books from it, as needed. 
          </p>
        </Jumbotron>{
        (myBooksArr.length > 0) ? 
          <ListGroup >
        {myBooksArr.map((e,index) => <ListItem key={index} title={e.title} smallImg={e.smallImageURL} author={e.author} id={e.id}/>)}
        </ListGroup> : 
        <Alert variant="warning">
           You have no books added to your list!
        </Alert>
        }
        
      </div>
   
    )
  }

export default YourBooks;


