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

