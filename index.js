// const express = require('express');
// const app= express();
// const port=3000;
// const path= require('path');

// app.use('/acme-first-second-third', express.static(path.join(__dirname, 'acme-first-second-third')))

let first= document.getElementById('list1');
let second= document.getElementById('list2');
let third= document.getElementById('list3')


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
    console.log(currList)
}