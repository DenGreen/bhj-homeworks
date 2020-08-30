const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(element =>{
    element.insertAdjacentHTML('beforeEnd', `<div class="tooltip">${element.title}</div>`);
    
    element.addEventListener('click', (e) =>{
        e.preventDefault();

        const tootlip = document.querySelectorAll('.tooltip');
        tootlip.forEach(e => e.classList.remove('tooltip_active'));

        element.querySelector('.tooltip').classList.toggle('tooltip_active');
    })
    
})