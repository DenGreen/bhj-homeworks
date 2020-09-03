const editor = document.getElementById('editor');

editor.addEventListener('keyup', ()=>{
    localStorage.editorValue = editor.value;
})

editor.value = localStorage.editorValue === undefined ? '' : localStorage.editorValue;