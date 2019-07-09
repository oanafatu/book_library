import React, {  useState, useEffect } from 'react';
import Book from './Book';
import {CardDeck, Spinner, Alert} from 'react-bootstrap';


const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000':'https://booklibrary-server.herokuapp.com';

function Books(props){ 

  const [data,setData] = useState(null);
  const [query, setQuery] = useState(props.input);
 
  const localInput = JSON.parse(window.localStorage.getItem('lastSearch')) ? 
            JSON.parse(window.localStorage.getItem('lastSearch')).searchInput : null;
  const localResult = JSON.parse(window.localStorage.getItem('lastSearch')) ?
            JSON.parse(window.localStorage.getItem('lastSearch')).result : null;

  useEffect (()=>{
    
    if(localInput !== query) {
      setData(null);
      fetch(`${url}/api/booksearch/${query}`)
       .then((res)=>res.json())
       .then((res)=>{
          setData(res); 
      })   
    } else {
      setData(localResult);
    }

  },[query]);

  if(query !== props.input) {
    setQuery(props.input);
  };

  if(data){

    const obj = {};
    obj.searchInput=query;
    obj.result=data;
    window.localStorage.setItem('lastSearch', JSON.stringify(obj));

    if (data.noResult){
    
      return <div className="no-result">
              <Alert variant="warning">
                  <Book noResult={data.noResult}/>
              </Alert>
               
             </div>
    } 
    
    else {

      let books = [];
        data.booksArr.forEach( (e,i) =>{
          books.push(<Book key={i} id={e.id} rating={e.rating} title={e.title} author={e.author} imageURL={e.imageURL} smallImg = {e.smallImageURL}/>)
        })
        return (
          <div className="card-container">
            <CardDeck>
              {books}
            </CardDeck>
          </div>
        )
    }
  } 
  
  return (
    <div className="spinner">
  
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />

    </div>
    )
  
};

export default Books;