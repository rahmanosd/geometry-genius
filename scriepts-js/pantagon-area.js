function pentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pantagon-area', area);
    
}
function getInputValueById(inputField){
      const inputField = document.getElementById(inputField);
      const inputValueText = inputField.value;
      const value = parseFloat(inputValueText);
      return value;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}