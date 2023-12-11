const imgList = [...document.querySelectorAll('img')];


imgList.forEach(ele => {
    ele.addEventListener('click', imgExpand);
});



function addClasses(e){
    imgList.forEach(ele => {
        ele.classList.add('reduce');
    });
}

function removeClasses(e){
    imgList.forEach(ele => {
        ele.classList = ['']
    });
}

function imgExpand(e){
    imgList.forEach(ele => {
        ele.srcElement.classList.add('reduce');
    });
    e.srcElement.classList.remove('reduce');
    e.srcElement.classList.add('expand');
    console.log(e.srcElement.classList)
    console.log(e.srcElement)
    console.log(e.srcElement.style.width)
}

function imgReduce(e){
    e.srcElement.classList.toggle('expand');
    e.srcElement.classList.add('reduce');
}