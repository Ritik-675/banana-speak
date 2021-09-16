// var username = prompt("give me your username");
// // console.log("Hello script is working from some file") ;
// var welcome_message = alert("heyyya welcome "+username) ;
// alert(welcome_message);
var btntranslate = document.querySelector("#btn-translate") ;
var txtInput= document.querySelector("#txt-input") ;
var outputDiv= document.querySelector("#output") ;

// console.log(txtInput); 

function clickHandler(){
    // console.log("clicked") ;
    // console.log("input",txtInput.value);
    outputDiv.innerText = "jsnjs" + txtInput.value ;
};

btntranslate.addEventListener("click", clickHandler); 