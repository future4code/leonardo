function ex1(){
  const numero = 14;
  let chute;
  let contador = 1;
  while (chute !== numero ){  
    chute = Number(prompt("Digite um numero"));
    if(chute > numero){
      alert("O numero chutado foi " + chute + " o numero que pensei é menor");
      contador +=1;
    }else if (chute < numero){
      alert("O numero chutado foi " + chute + " o numero que pensei é maior");
      contador +=1;
    }
  }
  console.log("Parabens, acertou");
  console.log("Numeros de chutes", contador);
}

