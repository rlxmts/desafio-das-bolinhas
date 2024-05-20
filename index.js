const bolinha = document.querySelector('.div-bolinha')
const listaDeBolinha = document.querySelector('.lista-bolinhas');
const canva = document.querySelector('.canva');
const botaoDesfazer = document.querySelector('.desfazer');
const botaoRefazer = document.querySelector('.refazer');

canva.addEventListener('mousemove', (e)=> {
   const posX = e.clientX;
   const posY = e.clientY;

   bolinha.style.opacity = "1";
   bolinha.style.transform = `translate3d(calc(${posX}px - 20px), calc(${posY}px - 70px), 0)`;
 });

 canva.addEventListener("mouseout", ()=> {
    bolinha.style.opacity = "0";
 });

 function criarBolinha(posicaoX, posicaoY){
    const li = document.createElement('li');
    li.classList.add('bolinha');
    li.style.position = 'fixed';
    li.style.transform = `translate3d( calc(${posicaoX}px - 19px ), calc(${posicaoY}px - 120px), 0)`;
    listaDeBolinha.appendChild(li);
 }

 canva.addEventListener('click', (e)=> {
    const posX = e.clientX;
    const posY = e.clientY;
    criarBolinha(posX, posY);
 })

botaoDesfazer.addEventListener('click', (e)=> {
    e.preventDefault();
    const ultimaBolinha = listaDeBolinha.lastChild;
    ultimaBolinha.style.display = "none";
})

botaoRefazer.addEventListener('click', (e)=> {
    e.preventDefault();
    const ultimaBolinha = listaDeBolinha.lastChild;
    ultimaBolinha.style.display = "block";
});
