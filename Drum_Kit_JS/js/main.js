const keys = document.querySelectorAll('#drum-keys > div');

const soundDict = {
    'A': 'CLAP',
    'S': 'HIHAT',
    'D': 'KICK',
    'F': 'OPENHAT',
    'G': 'BOOM',
    'H': 'RIDE',
    'J': 'SNARE',
    'K': 'TOM',
    'L': 'TINK'
};

Object.keys(soundDict).forEach(keyStroke => {
    soundDict[keyStroke] = `/Drum_Kit_JS/assets/${soundDict[keyStroke]}.wav`;
});

addEventListener("keydown", drumPressed);

function drumPressed(e){
    let curSound = (e.key).toUpperCase();
    let ele = document.getElementById(curSound);
    if(curSound in soundDict){
        visualChange(ele);
        playSound(curSound);
    }
    else{
        return;
    }
}


function visualChange(ele){
    ele.classList.add("active");
    setTimeout(()=> {
    ele.classList.remove("active");
},300);
}

function playSound(ele){
    let audio = new Audio(soundDict[ele]);
    audio.play()
}



