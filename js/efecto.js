
const colors = [
   '#F8485E',
    '#185ADB',
    '#FE9898',
    '#B980F0'
]



function createSquare(){
    const article = document.querySelector('article');
    const square = document.createElement('span');

    var size = Math.random() * 50;

    square.style.width = 20 + size +'px';
    square.style.height = 20 + size +'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';


    const bg  = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;
    
    article.appendChild(square);

    setTimeout(() =>{
        square.remove()
    },5000)
}

setInterval(createSquare , 150)