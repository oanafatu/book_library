

function myBooks(bookId){

    const lastSearch = JSON.parse(window.localStorage.getItem('lastSearch')).result.booksArr;
    const bookWithId = lastSearch.filter(e => e.id ===bookId);
    
    let myBooksObj = window.localStorage.getItem('myBooks') ? JSON.parse(window.localStorage.getItem('myBooks')) : {};
    let myBooksArr = Object.keys(myBooksObj).length > 0 ? myBooksObj.myBooksArr : [];

    myBooksArr = myBooksArr.concat(bookWithId);
    myBooksObj.myBooksArr = Object.values(myBooksArr.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}));
    
    window.localStorage.setItem('myBooks', JSON.stringify(myBooksObj)); 
}

export default myBooks;

