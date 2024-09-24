function getTextField(id){
    const textField = document.getElementById(id);
    return textField
}
function getValuesByInput(id){
    const valueNumber = parseFloat(document.getElementById(id).value);
    return valueNumber;
}

function getTextValue(id){
    const textValue =parseFloat( document.getElementById(id).innerText);
    return textValue;
    
}

function classAdd(id,className){
    const addClass = document.getElementById(id).classList.add(className);
    return addClass;
}
function classRemove(id,className){
    const removeClass = document.getElementById(id).classList.remove(className);
    return removeClass;
}