const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const saidby = document.getElementById("saidby");
const btn = document.getElementById("btn");

btn.addEventListener("click", getquote);

function getquote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      saidby.innerHTML = `- ${data.author}`;
    });
}
