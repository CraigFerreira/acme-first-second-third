
let lists=document.getElementById('lists')
let first= document.getElementById('list1');
let second= document.getElementById('list2');
let third= document.getElementById('list3')
let disabledLeftButton= document.getElementById('disabled-left');
disabledLeftButton.disabled=true;
let disabledRightButton=document.getElementById('disabled-right')
disabledRightButton.disabled=true;




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
    //    currList.innerHTML+=`<div class='list-info' style='height:100px; width:200px; border:1px solid orange;'>${val.name}</div>`
        let currEl=document.createElement('div');
        currEl.innerText=val.name;
        currEl.classList='list-info';
        currList.appendChild(currEl)
        // currEl.classList='list-info';
        // currEl.style='height:100px; width:200px; border:1px solid orange;'
        // currlist.appendChild(currEl)
    }
}

let divToMove=null;
let moveFrom=null;
let moveTo=null;
let divsToMove=[];

lists.addEventListener('click', (e)=>{
    if(e.target.className==='list-info') {
        divToMove=e.target;
        divToMove.style.background='red';
        divsToMove.push(divToMove)   
    }

    else if(e.target.className==='move-left'){
        for(let div of divsToMove){
            if(e.target.parentElement.parentElement===div.parentElement){
            moveFrom=div.parentElement;
            moveTo=div.parentElement.previousElementSibling
            moveFrom.removeChild(div);
            moveTo.appendChild(div);
            div.display='inline'
            div.style.background='white';
            }
        }
        divsToMove=[];
        
    }

        else if (e.target.className==='move-right'){
        for(let div of divsToMove){
            if(e.target.parentElement.parentElement===div.parentElement){
            moveFrom=div.parentElement;
            moveTo=div.parentElement.nextElementSibling
            moveFrom.removeChild(div);
            moveTo.appendChild(div);
            div.display='inline'
            div.style.background='white';
            }
        }
        divsToMove=[];
    }

})





















