var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}


function clickHandler() {
    
    
    var inputText = txtInput.value; 
    
   
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
};
btnTranslate.addEventListener("click", clickHandler);