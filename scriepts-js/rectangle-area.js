function rectangleCalculateArea(){
    // get length of the rectangle
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleText = rectangleLength.value;
    const length = parseFloat(rectangleText);
    console.log(length);
    // get weidth of the Rectangle
    const weidthInput = document.getElementById('rectangle-weidth');
    const weidthText = weidthInput.value;
    const weidth = parseFloat(weidthText);
    console.log(weidth);
    // caculate on the area
    const area = length * weidth;
    console.log(area);
    // display on the calculate
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
