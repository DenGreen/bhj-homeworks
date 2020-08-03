const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');

function increasingСounter() {
    clicker__counter.textContent++; 
    cookie.width = (cookie.width === 200) ? 300 : 200;
};

cookie.onclick = increasingСounter;