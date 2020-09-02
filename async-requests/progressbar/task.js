const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.onprogress = function(){
        progress.value += 0.3;
    }

    xhr.send(formData);
})

