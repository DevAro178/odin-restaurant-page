import bee from './assets/bee.svg'

let root=document.querySelector('#content');
export default function menu(){
// Heading Container
    let headingContainer=document.createElement('div');
    headingContainer.classList.add('heading-container');
    
    let img1=document.createElement('img');
    img1.classList.add('decorations');
    img1.classList.add('bee-left');
    img1.src=bee;
    headingContainer.appendChild(img1);
    
    let img2=document.createElement('img');
    img2.classList.add('decorations');
    img2.classList.add('bee-right');
    img2.src=bee;
    headingContainer.appendChild(img2);

    let heading=document.createElement('div');
    heading.classList.add('heading');
    
    let h1=document.createElement('h1');
    h1.textContent="Menu";
    heading.appendChild(h1);
    headingContainer.appendChild(heading);
    
// review-outer

    let reviewOuter=document.createElement('div');
    reviewOuter.classList.add('review-outer');
    reviewOuter.classList.add('comb-outer');
    
    let combInner=document.createElement('div');
    combInner.classList.add('comb-inner','review-inner');

    let p_review=document.createElement('p');
    p_review.classList.add('review');
    p_review.textContent="loremipsum"

    let p_customer=document.createElement('p');
    p_customer.classList.add('customer');
    p_customer.textContent="Author";

    combInner.append(p_review,p_customer);
    reviewOuter.appendChild(combInner);
    


    root.innerHTML='';
    root.append(headingContainer,reviewOuter);
}