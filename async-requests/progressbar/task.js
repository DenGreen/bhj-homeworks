const form = document.getElementById('form');
const xhr = new XMLHttpRequest();
const progress = document.getElementById( 'progress' );

xhr.open('POST', form.action);

const send = document.getElementById('send');

send.onclick = function(e){
    e.preventDefault();
    
    
    xhr.onreadystatechange = function () {
        xhr.onprogress= function(event){
                let i = 0; 
                console.log(event)
                if(i == event.loaded){
                    progress.value += 0.25;
                    i+=event.total/4;
                }
        };
    };    
    xhr.send(formData);    
}



 
    
          
          
 
              