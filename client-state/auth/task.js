function mainFunct() {
  const signinForm = document.getElementById("signin__form");
  const signin = document.querySelector(".signin");
  const welcome = document.querySelector(".welcome");

  function switchingClasses(){
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
  }

  if (localStorage.id) {
    switchingClasses();
    welcome.textContent += localStorage.id;
  } 

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === xhr.DONE && this.status === 200) {
        const data = JSON.parse(this.responseText);
        verifAuthoriz(data);
      }
    });
    xhr.send(formData);
  });

  function verifAuthoriz(data) {
    if (data.success) {
      switchingClasses();
      welcome.textContent += data.user_id;
      localStorage.id = data.user_id;
    } else {
      alert("Неверный логин/пароль");
    }
  }
}
mainFunct();