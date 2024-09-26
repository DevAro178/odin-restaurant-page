import './style.css'
import Home from './home.js'

let homeBtn=document.querySelector('#coverhome');
let menuBtn=document.querySelector('#covermenu');
let contactBtn=document.querySelector('#covercontact');

homeBtn.addEventListener('click',(e)=>{
    Home();
    homeBtn.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    contactBtn.classList.add('hidden');
})
menuBtn.addEventListener('click',(e)=>{
    menuBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    contactBtn.classList.add('hidden');
})
contactBtn.addEventListener('click',(e)=>{
    contactBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    menuBtn.classList.add('hidden');
})