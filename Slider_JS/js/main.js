const inpSpace = document.getElementById('spacing');
const inpBlur = document.getElementById('blur');
const inpColor = document.getElementById('clor');


const clor = inpColor.addEventListener('mouseover', changeColor);
const setlor = inpColor.addEventListener('change', setColor);
const space = inpSpace.addEventListener('mouseover', changeSpace);
const setpace = inpSpace.addEventListener('change', setSpace);
const blur = inpBlur.addEventListener('mouseover', changeBlur);
const setlur = inpBlur.addEventListener('change', setBlur);

function changeColor(e){
    console.log(e);
}

function setColor(e){
    console.log(e);
}

function changeSpace(e){
    console.log(e);
}

function setSpace(e){
    console.log(e);
}

function changeBlur(e){
    console.log(e);
}

function setBlur(e){
    console.log(e);
}