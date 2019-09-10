function ex3(){
  const numero = Math.floor((Math.random() * 100) + 1);
  //para eu saber o numero sorteado
  alert("Numero sorteado foi " + numero);
  let contador = 1;
  let chute = Math.floor((Math.random() * 100) + 1);
  let limitei = 0;
  let limites = 100;
  while (chute !== numero ){  
    if(chute > numero){
      console.log("O numero chutado foi " + chute + " o numero que pensei é menor");
      contador +=1;
      limites= chute
      chute -= Math.floor((Math.random() * (limites - limitei)) + 1);
    }else if (chute < numero){
      console.log("O numero chutado foi " + chute + " o numero que pensei é maior");
      contador +=1;
      limitei = chute;
      chute += Math.floor((Math.random() * (limites - limitei)) + 1);
    }
  }
  console.log("Parabens, acertou");
  console.log("Numeros de chutes", contador);
}

