require('./header.js');

const books = document.getElementById('libros-mensuales-grid');
const moreBooks = document.getElementById('libros-mensuales-show-more');
const allBooks = document.getElementById('libros-mensuales-show-all');
if(moreBooks && books){
    moreBooks.addEventListener('click',()=>{
        books.classList.add('expanded');
        moreBooks.classList.add('hidden');
        if(allBooks) allBooks.classList.remove('float-right');
    })
}