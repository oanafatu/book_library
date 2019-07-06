import React, {useState} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import Books from './Books';

function Search() {

    const [search, setSearch] = useState('');
    const textInput = React.createRef();

    function handleChange() {
        return textInput.current.value;
    }

    function handleSubmit(e){
        e.persist() 
        e.preventDefault()
        const search = handleChange();
        setSearch(search);
        textInput.current.value = '';
    }

    if (!search){
        const obj = JSON.parse(window.localStorage.getItem('lastSearch'));
        if (obj && obj.searchInput){
            return (
                <div>
                 <h1 className = "search-title" >What would you like to read today? </h1>
                 <h4 className = "search-subtitle">
                        Search powered by   
                        <img className="goodreads-logo" src="https://s.gr-assets.com/assets/icons/goodreads_icon_32x32-6c9373254f526f7fdf2980162991a2b3.png" alt="goodreads logo"></img>
                        oodreads</h4>
                 
                    <InputGroup className="input-group" size="lg" >
                    <FormControl  aria-label="Large" aria-describedby="inputGroup-sizing-sm" ref={textInput} type="text" onChange={(e) => handleChange()} />
                    <InputGroup.Prepend>
                        <Button btn="info" onClick={handleSubmit}>Search</Button>
                    </InputGroup.Prepend>
                    </InputGroup>
                { <Books input={obj.searchInput}/> }
            </div>
            )
        }
    }
        return (   <div >
            <h1 className = "search-title" >What would you like to read today?</h1>
            <h4 className = "search-subtitle">
                Search powered by 
                <img className="goodreads-logo" src="https://s.gr-assets.com/assets/icons/goodreads_icon_32x32-6c9373254f526f7fdf2980162991a2b3.png" alt="goodreads logo"></img>
                oodreads</h4>
           
            <InputGroup className="input-group" size="lg" >
                <FormControl  aria-label="Large" aria-describedby="inputGroup-sizing-sm" ref={textInput} type="text" onChange={(e) => handleChange()} />
                <InputGroup.Prepend>
                    <Button btn="info" onClick={handleSubmit}>Search</Button>
                </InputGroup.Prepend>
            </InputGroup>
            { (search)? <Books input={search}/> : ''}
        </div>)
    // }


}

export default Search;