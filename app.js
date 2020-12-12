let inputBox= document.querySelector("#inputTextArea")
let outputBox=document.querySelector("#outputTextArea")
let btnTranslate=document.getElementById("transalteBtn")
let url="https://api.funtranslations.com/translate/klingon.json";
const updatedUrl=()=>{
    let newUrl=url+"?text="+inputBox.value
    return newUrl;
}

const exceptionHandler=error=>{
    console.log("error",error);
}
const convertTranslate=()=>{
    
    fetch(updatedUrl()).then(response=>response.json()).then(json=>
        outputBox.innerText=json.contents.translated).catch(exceptionHandler)
}

btnTranslate.addEventListener("click", convertTranslate);

