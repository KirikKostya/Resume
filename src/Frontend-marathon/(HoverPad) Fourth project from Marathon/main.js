const conteiner = document.querySelector('#board');
const colors = ['red', 'lighrblue', 'white', 'brown', 'pink', 'yellow', 'orange'];
const input = document.querySelector('#input');
const btn = document.querySelector('.btn');
const deletBtn = document.querySelector('#deletBtn')
let SQUARE_NUMBER;

btn.addEventListener('click', ()=>{

    let SQUARE_NUMBER = input.value;

    if(SQUARE_NUMBER > 1 && SQUARE_NUMBER<=400){

        for (i=0; i<SQUARE_NUMBER; i++){

            const square = document.createElement('div');
            square.classList.add('square');

            conteiner.append(square);

            square.addEventListener('mouseover', ()=>{
                addColor(square);
            })

            square.addEventListener('mouseleave', ()=>{
                
                clearColor(square)
                console.log(square)
            })

            btn.disabled = true;
            deletBtn.disabled = false

            deletBtn.addEventListener('click', ()=>{
            removeSquares(square);
            deletBtn.disabled = true
            })
            input.value = '';
            input.focus()
        }

    } else {
        alert('Sorry your number should be bigger then 1 and smaller then 400');
        input.value = '';
        input.focus()
    }

    

})


function addColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function clearColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = 'none'

}

function getRandomColor(){
    const INDEX = Math.floor(Math.random()*colors.length);
    return colors[INDEX];
}

function removeSquares(element){
    btn.disabled = false;
    element.remove();
    input.value = '';
    input.focus()
}


