const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const secondButton = document.querySelector('#btn_creat');
const newConteiner = document.querySelector('#newConteiner');
const secondRowDiv = document.querySelector('.secondRow');
let newitem;

secondButton.addEventListener('click', ()=>{


    const plaseholdersInFunction = document.querySelectorAll('.placeholderInFunc');



    const newdiv = document.createElement('div'); 
    newdiv.classList.add('thirdRow');

    const newPlaceholder = document.createElement('div');
    newPlaceholder.classList.add('placeholderInFunc');
    newdiv.appendChild(newPlaceholder);

    newitem = document.createElement('div');
    newitem.classList.add('item');
    newitem.setAttribute('draggable', true);
    newitem.innerText = input.value;
    newPlaceholder.appendChild(newitem);

    const newPlaceholder2 = document.createElement('div');
    newPlaceholder2.classList.add('placeholderInFunc');
    newdiv.appendChild(newPlaceholder2);

    const newPlaceholder3 = document.createElement('div');
    newPlaceholder3.classList.add('placeholderInFunc');
    newdiv.appendChild(newPlaceholder3);

    secondRowDiv.insertAdjacentElement('afterend', newdiv);

    newitem.addEventListener('dragstart', dragStart);
    newitem.addEventListener('dragend', dragEnd);

function dragStart(){
    newitem.classList.add('holdInFunc');
    setTimeout(() => newitem.classList.add('hideInFunc'), 10);
}

function dragEnd(){
    newitem.classList.remove('holdInFunc', 'hideInFunc');
}

    
    console.log(newdiv)
} ) // End of secondButton.addEventListener

const plaseholdersInFunction = document.querySelectorAll('.placeholderInFunc');


// for (const placeholderInFunc of plaseholdersInFunction) {

//     placeholderInFunc.addEventListener('dragover', dragover);
//     placeholderInFunc.addEventListener('dragenter',dragenter);
//     placeholderInFunc.addEventListener('dragleave',dragleave);
//     placeholderInFunc.addEventListener('drop', dragdrop);
    
// }

// function dragover(event){
//     event.terget.preventDefault();
// }
// function dragenter(event){
// event.target.classList.add('hoveredInFunc');
// }
// function dragleave(event){
// event.target.classList.remove('hoveredInFunc')
// }
// function dragdrop(event){
//     event.target.append(newitem)
// }


button.addEventListener('click', ()=>{
    item.innerText = input.value;
    input.focus();
    input.value = '';
})

for (const placeholder of placeholders) {

    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter',dragenter);
    placeholder.addEventListener('dragleave',dragleave);
    placeholder.addEventListener('drop', dragdrop);
    
}

function dragover(event){
    event.preventDefault();
}
function dragenter(event){
event.target.classList.add('hovered');
}
function dragleave(event){
event.target.classList.remove('hovered')
}
function dragdrop(event){
    event.target.append(item)
}


item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(event){
    item.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 10);
}

function dragEnd(event){
    event.target.classList.remove('hold', 'hide');
}

