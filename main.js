const colorsBox = document.querySelector(":root");
const themeNumber1 = document.getElementById("themeNumber1");
const themeNumber2 = document.getElementById("themeNumber2");
const themeNumber3 = document.getElementById("themeNumber3");

function themeChangerOne() {
    colorsBox.style.setProperty('--bakckgroundBody','snow')
    colorsBox.style.setProperty('--backgroundCalc','#89A8B2')
    colorsBox.style.setProperty('--tdBackground','#E5E1DA')
    colorsBox.style.setProperty('--borderColor','#46acff')
    colorsBox.style.setProperty('--diferentTd','#076686')
    colorsBox.style.setProperty('--shadow','rgba(128, 128, 128, 0.608)')
    colorsBox.style.setProperty('--fontColor','snow')
    themeBar.style.justifyContent = "start" ;
}

function themeChangerTow() {
    colorsBox.style.setProperty('--bakckgroundBody','#CE9461')
    colorsBox.style.setProperty('--backgroundCalc','snow')
    colorsBox.style.setProperty('--tdBackground','#F0DE36')
    colorsBox.style.setProperty('--borderColor','#FFC26F')
    colorsBox.style.setProperty('--diferentTd','#E5890A')
    colorsBox.style.setProperty('--shadow','#4F200D')
    colorsBox.style.setProperty('--fontColor','#F0A500')
    themeBar.style.justifyContent = "center" ;
}

function themeChangerThree() {
    colorsBox.style.setProperty('--bakckgroundBody','#E2DFD0')
    colorsBox.style.setProperty('--backgroundCalc','#181C14')
    colorsBox.style.setProperty('--tdBackground','#697565')
    colorsBox.style.setProperty('--borderColor','#3C3D37')
    colorsBox.style.setProperty('--diferentTd','#1B3C73')
    colorsBox.style.setProperty('--shadow','#A59D84')
    colorsBox.style.setProperty('--fontColor','snow')
    themeBar.style.justifyContent = "end" ;
}


themeNumber1.addEventListener("click", themeChangerOne);
themeNumber2.addEventListener("click", themeChangerTow);
themeNumber3.addEventListener("click", themeChangerThree);

function calckResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}