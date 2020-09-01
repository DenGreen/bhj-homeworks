const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const valueObj = JSON.parse(xhr.response);
    const answers = valueObj.data.answers;

    pollTitle.innerText = valueObj.data.title;

    for (const element in answers) {
      pollAnswers.insertAdjacentHTML(
        "beforeEnd",
        `<button class="poll__answer">
                ${answers[element]}
              </button>`
      );
    }

    alertPollAnswer();
  }
});

function alertPollAnswer() {
  const pollAnswer = document.querySelectorAll(".poll__answer");

  pollAnswer.forEach((ePoll) => {
    ePoll.addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");
    });
  });
}