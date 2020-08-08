const modalMain = document.getElementById("modal_main");
const modalClose = document.getElementsByClassName("modal__close");
const showSuccess = document.getElementsByClassName("show-success");
const modalSuccess = document.getElementById("modal_success");
modalMain.className = "modal modal_active";

for (i = 0; i < modalClose.length; i++){
    let firstElement = modalClose[i];
    firstElement.onclick = function (){modalMain.className = "modal"; modalSuccess.className = "modal";};
}
showSuccess[0].onclick = function (){modalSuccess.className = "modal modal_active"; modalMain.className = "modal";};