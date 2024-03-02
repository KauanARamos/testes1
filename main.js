const botao = document.querySelectorAll(".botao");
const resposta = document.querySelectorAll(".resposta");


/*ao apertar o botão, é adicionada a classe "ativo" a ele, mudando a cor.*/

function input(){ 
    if (input != null && input % 2 == 0) {
        resposta[0].classList.add("ativo");
        resposta[1].classList.remove("ativo");
    }   
    else if (input != null) {
        resposta[0].classList.remove("ativo");
        resposta[1].classList.add("ativo");
    }
}

for(let i=0;i <botao.length;i++){

    botao[i].classList.remove("ativo");

    botao[i].onmousedown = function(){

        for(let j=0;j<botao.length;j++){
            botao[j].classList.remove("ativo");
        }

        botao[i].classList.add("ativo");

       botao[i].onmousedown = function (){
           
        }
    }
    /*ao soltar o botão do mouse, a classe "ativo" é removida, deixando o botão com a cor padrão mais uma vez.*/
    botao[i].onmouseup = function(){
        
        for(let j=0;j<botao.length;j++){
            botao[j].classList.remove("ativo");
        }
    }
}
