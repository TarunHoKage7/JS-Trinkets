const inpSpace = document.getElementById('spacing');
const inpBlur = document.getElementById('blur');
const inpColor = document.getElementById('clor');
const root_theme = document.querySelector(':root');


const clor = inpColor.addEventListener('mousemove', setColor);
const space = inpSpace.addEventListener('mousemove', setSpace);
const blur = inpBlur.addEventListener('mousemove', setBlur);


function setColor(e){
    root_theme.style.setProperty('--shaded-background-color', e.target.value);
}


function setSpace(e){
    root_theme.style.setProperty('--spacing', `${e.target.value}px`);
}


function setBlur(e){
    root_theme.style.setProperty('--blur', `${e.target.value}px`);
}