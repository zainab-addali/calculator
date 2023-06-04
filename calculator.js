let prentEl=document.getElementById("printAll-el")

let char
function print(char){
    prentEl.value +=char
}

function result(){
    prentEl.value=eval(prentEl.value)
}

function deleteAll(){
    prentEl.value ="";
}

