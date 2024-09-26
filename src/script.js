import './style.css'
import Home from './home.js'
import Menu from './menu.js'
import Contact from './contact.js'

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
    Menu();
    menuBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    contactBtn.classList.add('hidden');
})
contactBtn.addEventListener('click',(e)=>{
    Contact();
    contactBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    menuBtn.classList.add('hidden');
})

Home();