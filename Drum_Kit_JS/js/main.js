const keys = Array(document.querySelectorAll('#drum-keys > div'));

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

addListeners();

function addListeners() {
    addEventListener("keydown", drumPressed);
    document.querySelectorAll('#drum-keys > div').forEach(ele => {
        ele.addEventListener("click", drumClicked, true)
    })
}

function drumClicked(e){
    
    if(e.srcElement.id){
        visualChange(e.srcElement);
        playSound(e.srcElement.id);
    }
    else{
        visualChange(e.srcElement.parentElement);
        playSound(e.srcElement.parentElement.id);
    }
}

function drumPressed(e){
    const curSound = (e.key).toUpperCase();
    const ele = document.getElementById(curSound);
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
    const audio = new Audio(soundDict[ele]);
    audio.play()
}