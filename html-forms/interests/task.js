const interestCheck = document.querySelectorAll(".interests_active");

for (const event of interestCheck) {
  const parentsInterestCheck = event
    .closest(".interest")
    .querySelector(".interest__check");

  const interestsActiveCheck = parentsInterestCheck
    .closest(".interest")
    .querySelectorAll(".interests_active .interest__check");

  parentsInterestCheck.addEventListener("change", function (){
    let check = this.checked
    for (const eventCheck of interestsActiveCheck) {
        eventCheck.checked = check;
    }
  });
}
