
import React from 'react';
import { ListGroup} from 'react-bootstrap';
import removeBook from '../js/removeBook'

function handleClick(e){

    removeBook(e.target.previousSibling.innerHTML);
    window.location.reload();
  
}
  
function ListItem(props) {
  
    return (
    <ListGroup.Item  variant="info" className = "my-book">
    
        <img src={props.smallImg} alt="small"></img>
        <div>
            <p  className="mybook-title">{props.title}</p>
            <p  className="mybook-author">-- {props.author} --</p>
        </div>
        <span className="ishidden">{props.id}</span>
        <button className="btn-remove" onClick={handleClick}>X</button>
    
    </ListGroup.Item>
    )
}

  export default ListItem;