function deleteEverything(){
    document.getElementById('screen').value = ""
}

function addNumber(screenNumber){
    document.getElementById('screen').value += screenNumber
}
function add(screenNumber){
    document.getElementById('screen').value += screenNumber
}

function equalTo(screenNumber){
   let x = document.getElementById('screen').value
   let y = eval(x)
   document.getElementById('screen').value = y 
}


function clearLast(){
    let screenValue = document.getElementById("screen");
    let lengthOfString = String(screenValue.value).length;
    let partOfString = String(screenValue.value).slice(0, lengthOfString - 1)
    document.getElementById("screen").value = partOfString
}