const fontSize = document.getElementsByClassName('font-size');
const book = document.querySelector('.book');

for (const font of fontSize){
    font.addEventListener('click', (e) =>{
        e.preventDefault();
        book.classList ='book';
        for(const fontDel of fontSize){
            fontDel.classList.remove('font-size_active');
        }
        font.classList.add('font-size_active');
        if (font.dataset.size === 'small'){
            book.classList.add('book_fs-small');
        } else if (font.dataset.size === 'big'){
            book.classList.add('book_fs-big');
        } else {
            book.classList.add('book');
        }
    }, false)
}