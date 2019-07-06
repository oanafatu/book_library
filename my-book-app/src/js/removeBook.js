
function removeBook(bookId){

    let myBooksObj = JSON.parse(window.localStorage.getItem('myBooks'));
    const myBooksArr = myBooksObj.myBooksArr;
    const booksWithoutId = myBooksArr.filter(e => e.id !==bookId);
    myBooksObj.myBooksArr = booksWithoutId;
    window.localStorage.setItem('myBooks', JSON.stringify(myBooksObj));
}

export default removeBook;



