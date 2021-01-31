// const express = require('express');
// const app= express();
// const port=3000;
// const path= require('path');

// app.use('/acme-first-second-third', express.static(path.join(__dirname, 'acme-first-second-third')))

let first= document.getElementById('list1');
let second= document.getElementById('list2');
let third= document.getElementById('list3')
let button1=document.getElementById('1')
let button2=document.getElementById('2')
let button3=document.getElementById('3')



window.addEventListener('load', ()=>{
    createPeople();
})


let slots=['first', 'second', 'third'];
let users=[
    {id:1, name:'Moe', slot:'first'},
    {id:2, name:'Larry', slot:'first'},
    {id:3, name:'Curly', slot:'first'},
    {id:4, name:'Lucy', slot:'first'}
]

function createPeople(){
    let currlist;
    for(let val of users){
       currList= document.getElementById(val.slot)
       currList.innerHTML+=`<div class='list-info'>${val.name}</div>`
    }
    // console.log(currList)
}

let divToMove;
let moveFrom;
let moveHere;

document.addEventListener('click', (e)=>{
    let divToMove=e.target;
    let moveFrom= e.target.parentElement
    let moveHere=(divToMove.parentElement.nextElementSibling)
    // console.log(divToMove, moveFrom, moveHere)
    // console.log(moveHere, divToMove);
    moveHere.appendChild(divToMove);
})

button1.addEventListener('click', (e)=>{
    let selected=e.target;
    if(selected.className==='move-left'){
        // console.log(obj)


    }
    // else if(selected.className==="move-right") console.log(selected.className);
})

// function moveElement(currId, direction, divToMove){
//     if(currId==='first' && direction==='move-left'){
//         // console.log(selected)
//         selected.parentElement.removeChild(divToMove)
//     }
// }