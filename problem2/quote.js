var quotes = document.querySelector(".quotes-text");
var author = document.querySelector(".author .author-name");
var quotes_btn = document.querySelector("button");
var wholeContent = document.querySelector(".content");
var greeting = document.querySelector("#greeting");

function greetText() {
    var today = new Date();
    var hours = today.getHours();

    if (hours < 12) {
        greeting.innerHTML = "morning";
    }
    if (hours >= 12 && hours < 18) {
        greeting.innerHTML = "afternoon";
    }
    if (hours >= 18 && hours < 20) {
        greeting.innerHTML = "evening";
    }
    if (hours >= 20 && hours < 24) {
        greeting.innerHTML = "night";
    }
    if (hours == 24)
        greeting.innerHTML = "midnight";
}
greetText();

function changeTheTheme() {
    var color =
        "rgb(" +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        "," +
        Math.round(Math.random() * 255) +
        ")";
    document.body.style.backgroundColor = color;

    quotes_btn.style.backgroundColor = color;

    wholeContent.style.color = color;
}

function randomQuote() {
    quotes_btn.innerHTML = "Loading Quotes...";
    quotes_btn.classList.add("loading-quotes");
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((result) => {
            quotes.innerHTML = result.content;
            author.innerHTML = result.author;
            quotes_btn.innerHTML = "New Quote";
            quotes_btn.classList.remove("loading-quotes");
        });
}

quotes_btn.addEventListener("click", randomQuote);