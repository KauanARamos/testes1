const botao = document.querySelectorAll(".botao");
const resposta = document.querySelectorAll(".resposta");
let meuInput = document.getElementById("meuinput");
meuInput.addEventListener("", () => {
    console.log("meuInput.value")
});

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*ao apertar o botão, é adicionada a classe "ativo" a ele, mudando a cor.*/

for(let i=0;i <botao.length;i++){

    botao[i].classList.remove("ativo");

    botao[i].onmousedown = function(){

        for(let j=0;j<botao.length;j++){
            botao[j].classList.remove("ativo");
          

            botao[i].classList.add("ativo");

            botao[i].onmousedown = function (){
                meuInput.addEventListener("keydown", function(){
                if (meuInput.value % 2 == 0) {
                    resposta[0].classList.add("ativo");
                    resposta[1].classList.remove("ativo");
                }   
                else (meuInput.value != null); {
                    resposta[0].classList.remove("ativo");
                    resposta[1].classList.add("ativo");
            }
        })};
           
/*ao soltar o botão do mouse, a classe "ativo" é removida, deixando o botão com a cor padrão mais uma vez.*/
        botao[i].onmouseup = function(){
        
                botao[j].classList.remove("ativo");
            }
        } 
    } 
} 
console.log(meuInput)