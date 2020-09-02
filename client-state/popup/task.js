const modalMain = document.querySelector("#subscribe-modal");
const modalClose = document.getElementsByClassName("modal__close");

modalMain.addEventListener('click', () =>{
    modalMain.classList.remove('modal_active');
    document.cookie = 'modalSearch=' + encodeURIComponent(modalMain.className);  
})

modalMain.className = getCookie('modalSearch');

function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}