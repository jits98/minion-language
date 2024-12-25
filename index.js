let button = document.querySelector(".js-btn");
let inputElement = document.querySelector(".txtarea");
let outputElement = document.querySelector(".output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! Try again after some time");
}

function clickHandler() {
  let inputText = inputElement.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputElement.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", clickHandler);
