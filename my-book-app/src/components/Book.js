import React from 'react';
import {Card, Button} from 'react-bootstrap';
import myBooks from '../js/myBooks';

function Book(props){

    function handleClick(e){
        const bookId = e.target.previousSibling.innerHTML;
        myBooks(bookId);
    }

    if (props.noResult){
        return <div>{props.noResult}</div>
    } else {

        return (
            <div>
                <Card className="book-card" bg="light" style={{ width: '18rem', height: '28rem' }}>
                    <Card.Body>
                        <Card.Title className="book-title">{props.title}</Card.Title>
                        <Card.Title className="book-author" >-- {props.author} --</Card.Title>
                        <Card.Img className="book-img" variant="top" src={props.imageURL}/>
                        <span className="ishidden">{props.id}</span>
                    <Button className="btn-add" variant="info" onClick={handleClick}>Add to my books</Button>
                    </Card.Body>
                    <Card.Footer className="book-footer">
                        <p>
                            <img className="goodreads-logo" src="https://s.gr-assets.com/assets/icons/goodreads_icon_32x32-6c9373254f526f7fdf2980162991a2b3.png" alt="goodreads logo"></img>
                        oodreads rating: {props.rating}</p>
                    </Card.Footer>
                </Card>

            </div>
        )
    }

}

export default Book;