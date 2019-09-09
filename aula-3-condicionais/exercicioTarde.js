function ex1a(){
  num1 = Number(prompt("Digite um primeiro numero"));
  num2 = Number(prompt("Digite um segundo numero"));
  maior = 0;
  menor = 0;
  if (num1 === num2){
    console.log("Erro! Os numeros sao iguais")
  } else if (num1 > num2){
    maior = num1;
    menor = num2;
    console.log("o maior numero é ", maior , "seguido por ", menor);
    }else{
      maior = num2;
      menor = num1;
      console.log("o maior numero é ", maior , "seguido por ", menor);
    }
}
function ex1b(){
  num1 = Number(prompt("Digite um primeiro numero"));
  num2 = Number(prompt("Digite um segundo numero"));
  num3 = Number(prompt("Digite um terceiro numero"));
  maior = 0;
  menor = 0;
  meio = 0;
  function imprimir (){
    console.log("o maior numero é ", maior , "seguido por ", meio , " e por ultimo ", menor)
  }
  if (num1 === num2 || num1 === num3 || num2 === num3){
    console.log("Erro! Nao inserir numeros iguais")
  }else if (num1 > num2 && num1 > num3){
    maior = num1;
    if (num3 > num2){
      meio = num3;
      menor = num2;
      imprimir();
      }else {
        meio = num2;
        menor = num3;
        imprimir();
      }
  }else if (num2 > num3 && num2 > num1){
      maior = num2;
      if (num3 > num1){
        meio = num3;
        menor = num1;
        imprimir();
      }else{
        meio = num1;
        menor = num3;
        imprimir();
      }
    }else if(num3 > num1 && num3 > num2){
      maior = num3
      if(num2 > num1){
        meio = num2;
        menor = num1;
        imprimir();
      }else{
        meio = num1;
        menor = num2;
        imprimir();
      }
    }
  }

function ex2a(){
  
  if (confirm("é um animal?")){
    if(confirm("tem pelo?")){
      if(confirm("late?")){
        console.log("é um cachorro")
      }else{
        console.log("é um gato");
      }
    }else{
      if(confirm("voa?")){
        console.log("é um passaro");
      }else{
        console.log("é um peixe");
      }
    }  
  }else{
    console.log("é uma pedra");
  }
}

function ex2b(){
  
  if (confirm("é um animal?")){
    if(confirm("tem pelo?")){
      if(confirm("late?")){
        console.log("é um cachorro")
      }else{
        if(confirm("gosta de queijo?")){
          console.log("é um rato");
        }else{
          console.log("é um gato");
        }
      }
    }else{
      if(confirm("voa?")){
        console.log("é um passaro");
      }else{
        if(confirm("tem dedos?")){
        console.log("é um sapo");
        }else{
        console.log("é um peixe");
        }
      }
    }  
  }else{
    if(confirm("é vivo?")){
      console.log("é uma planta");
    }else{
      console.log("é uma pedra");
    }
  }
}

function ex3(){
  ingresso = {tipoJogo:0, etapaJogo:0, categoriaJogo:0, quantidade:0, valor:0}
  cliente = prompt("Informar seu nome completo");
  ingresso.tipoJogo = prompt("Informar o tipo de jogo");
  ingresso.etapaJogo = prompt("Informar a etapa do jogo");
  ingresso.categoriaJogo = prompt("Informar a categoria do ingresso");
  ingresso.quantidade = prompt("Informar a quantidade dos ingressos");
  valorIngressoUS = 0;
  valorIngressoRS = 0;
  valorTotalUS = 0;
  valorTotalRS = 0;

switch (ingresso.etapaJogo){
  case "SF":
    ingresso.etapaJogo = "Semi Final";
    switch (ingresso.categoriaJogo){
      case '1':
      ingresso.valor = 1320;
      break;
      case '2':
      ingresso.valor = 880;
      break;
      case '3':
      ingresso.valor = 550;
      break;
      case '4':
      ingresso.valor = 220;
      break;
    }break;
  case 'DT':
    ingresso.etapaJogo = "Decisao 3 lugar";
    switch (ingresso.categoriaJogo){
      case '1':
      ingresso.valor = 660;
      break;
      case '2':
      ingresso.valor = 440;
      break;
      case '3':
      ingresso.valor = 330;
      break;
      case '4':
      ingresso.valor = 170;
      break;
    }break;
  case 'FI':
    ingresso.etapaJogo = "Final";
    switch (ingresso.categoriaJogo){
      case '1':
      ingresso.valor = 1980;
      break;
      case '2':
      ingresso.valor = 1320;
      break;
      case '3':
      ingresso.valor = 880;
      break;
      case '4':
      ingresso.valor = 330;
      break;
    }break;
  
}

if(ingresso.tipoJogo === 'IN'){
  ingresso.tipoJogo = "Internacional"
  valorIngressoUS = ingresso.valor / 4.1;
  valorTotalUS = valorIngressoUS * ingresso.quantidade;
  valorTotalRS = ingresso.valor * ingresso.quantidade;
  console.log("---Dados da Compra---");
  console.log("Nome do cliente:", cliente);
  console.log("Tipo do Jogo:", ingresso.tipoJogo);
  console.log("Etapa do Jogo:", ingresso.etapaJogo);
  console.log("Categoria:", ingresso.categoriaJogo);
  console.log("Quantidade de ingressos:", ingresso.quantidade);
  console.log("--Valores--");
  console.log("Valor do ingresso em U$", valorIngressoUS.toFixed(2));
  console.log("Valor do ingresso em R$", ingresso.valor);
  console.log("Valor total da compra em U$", valorTotalUS.toFixed(2));
  console.log("Valor total da compra R$", valorTotalRS);

}else{
  ingresso.tipoJogo = "Nacional";
  valorTotalRS = ingresso.valor * ingresso.quantidade;
  console.log("---Dados da Compra---");
  console.log("Nome do cliente:", cliente);
  console.log("Tipo do Jogo:", ingresso.tipoJogo);
  console.log("Etapa do Jogo:", ingresso.etapaJogo);
  console.log("Categoria:", ingresso.categoriaJogo);
  console.log("Quantidade de ingressos:", ingresso.quantidade);
  console.log("--Valores--");
  console.log("Valor do ingresso em R$ ", ingresso.valor);
  console.log("Valor total da compra R$ ", valorTotalRS.toFixed(2));
}
}