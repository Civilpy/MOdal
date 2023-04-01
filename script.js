'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnbtnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll(
    '.show-modal');

const CloseModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
    
const openModal =  function(){
    console.log('Button clicked');  
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }



for(let i = 0 ;i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
    //there is only one line so like if if there is
    //only one line fo code we dont use {}



btnCloseModel.addEventListener('click', CloseModal)
overlay.addEventListener('click', CloseModal)

document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        CloseModal();
    } 
})




