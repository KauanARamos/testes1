const botao = document.querySelectorAll(".botao");

/*ao apertar o botão, é adicionada a classe "ativo" a ele, mudando a cor.*/
for(let i=0;i <botao.length;i++){
    botao[i].onmousedown = function(){

        for(let j=0;j<botao.length;j++){
            botao[j].classList.remove("ativo");
        }

        botao[i].classList.add("ativo");
    }
    /*ao soltar o botão do mouse, a classe "ativo" é removida, deixando o botão com a cor padrão mais uma vez.*/
    botao[i].onmouseup = function(){
        
        for(let j=0;j<botao.length;j++){
            botao[j].classList.remove("ativo")
        }
    }
}