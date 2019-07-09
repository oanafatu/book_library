import React from 'react';
import About from './About';
import MyBooks  from './MyBooks';
import Search from './Search';
import Home from './Home';
import '../style/App.css';
import '../style/index.css';
import {HashRouter, Link, Route} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../style/book_library.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
        <Navbar collapseOnSelect expand="md" bg="light"  >
          <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
    
              <Link to = '/'>Home</Link>
              <Link to = '/search'>Search Books</Link>
              <Link to = '/my-books'>My Books</Link>
              <Link to = '/about'>About</Link>
  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div>
        <Route exact path='/' component={Home}></Route>
        <Route path='/search' component={Search}></Route>
        <Route path='/my-books' component={MyBooks}></Route>
        <Route path='/about' component={About}></Route>
      </div> 
    </HashRouter>    
  );  
}

export default App;
