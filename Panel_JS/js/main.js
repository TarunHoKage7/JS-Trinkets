const imgList = [...document.querySelectorAll('img')];
const main = document.querySelector('main');
main.addEventListener('mouseover', addClasses);
main.addEventListener('mouseout', removeClasses);


imgList.forEach(ele => {
    ele.addEventListener('mouseover', imgExpand);
    ele.addEventListener('mouseout', imgReduce);
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
    e.srcElement.classList.toggle('reduce');
    e.srcElement.classList.add('expand');
    console.log(e.srcElement.classList)
    console.log(e.srcElement)
    console.log(e.srcElement.style.width)
}

function imgReduce(e){
    e.srcElement.classList.toggle('expand');
    e.srcElement.classList.add('reduce');
}