const https = require("https");
const convert = require('xml-js');
require('dotenv').config();

function bookSearch(string, pageId=1){
    return new Promise ((resolve, reject)=>{
        const key = process.env.MYAPIKEY;

        const q = string;   
        let url = 'https://www.goodreads.com/search/index.xml?q=' + q + '&page=' + pageId + '&key=' + key;

        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
                });
            res.on("end", () => {
                let xml = body;
                let result = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
                let partial = result.GoodreadsResponse.search;

                let arrBooks = partial.results.work; 

                let books = {};
                books.resultsStart = partial['results-start']._text;
                books.resultsEnd = partial['results-end']._text;
                books.totalResults = partial['total-results']._text; 

                if (!arrBooks){
                    books.noResult = 'No book found for this search. Try a new one!';
              
                    return resolve(books);
                }
                
                books.booksArr = [];
                for (let i = 0; i < arrBooks.length; i++) {
                    let obj = {id:arrBooks[i].id._text,  
                                rating: arrBooks[i].average_rating._text, 
                                title: arrBooks[i].best_book.title._text,
                                author: arrBooks[i].best_book.author.name._text,
                                imageURL: arrBooks[i].best_book.image_url._text,
                                smallImageURL: arrBooks[i].best_book.small_image_url._text,
                            }

                    books.booksArr.push(obj) ;
                    obj = {}
                }
                
                resolve(books);
                });
        }).on('error', (err)=>{
            reject(err);
            });

        })
}

module.exports.bookSearch = bookSearch;
