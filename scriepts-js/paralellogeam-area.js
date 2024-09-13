function paralellogramAreaCalculate(){
    const paralellogramInput = document.getElementById('paralellogram-base');
    const paralellogramText = paralellogramInput.value;
    const base = parseFloat(paralellogramText);
    console.log(base)
    const paralellogramHeigth = document.getElementById('paralellogram-heigth');
    const paralellogramArea = paralellogramHeigth.value;
    const height = parseFloat(paralellogramArea);
    console.log(height);
    const area = base * height;
    console.log(area);
    const paralellogramAreaSpan = document.getElementById('paralellogeam-area');
    paralellogramAreaSpan.innerText = area;
}