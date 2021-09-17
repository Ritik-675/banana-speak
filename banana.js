var inputText = document.querySelector("#text-inp");
var buttonTrans = document.querySelector(".but");
var outputText = document.querySelector("#text-out");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;
var serverURL = "	https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong is with server try again in sometime");
}
function dothing() {
  fetch(getTranslationURL(inputText.value))
    .then((Response) => Response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}
buttonTrans.addEventListener("click", dothing);
