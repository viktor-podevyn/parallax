document.addEventListener('keydown', (event) => {

let gif = document.querySelector('.gif');
let layer = document.querySelectorAll('.layer');


switch (event.key) {
    case'ArrowLeft':
        gif.setAttribute('direction', 'ArrowLeft');
        layer.forEach(element => {
            element.classList.remove('bgNormal');
            element.classList.add('bgReverse');
        })
        break;
    case'ArrowRight':
        gif.setAttribute('direction', 'ArrowRight');
        layer.forEach(element => {
            element.classList.remove('bgReverse');
            element.classList.add('bgNormal');
        })
        break;
}
    return false;
})
