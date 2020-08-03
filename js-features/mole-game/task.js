let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
getHole = (i) => document.getElementById(`hole${i}`);
resetСounter = () => {
    lost.textContent = 0;
    dead.textContent = 0;
};

for (i = 1; i <= 9; i++) {
  getHole(i).onclick = function(){
    if (this.className.includes('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;      
    };
    if ((lost.textContent * 1) === 5) {
        resetСounter();
        alert('Вы проиграли');
    } else if ((dead.textContent * 1) === 10){
        resetСounter();
        alert('Вы победили');
    };
  };
};