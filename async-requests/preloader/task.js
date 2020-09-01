const xhr = new XMLHttpRequest();
const items = document.getElementById("items");

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.getElementById("loader").classList.remove("loader_active");

    const data = JSON.parse(xhr.response);
    const valutes = data.response.Valute;

    for (let element in valutes) {
      const valute = valutes[element];
      items.insertAdjacentHTML(
        "beforeEnd",
        `
        <div class="item">
            <div class="item__code">
                ${valute.CharCode}
            </div>
            <div class="item__value">
                ${valute.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`
      );
    }
  }
};
