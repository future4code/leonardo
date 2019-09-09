function ex1(){
  let continuar
  let maoUsuario = []
  let maoComputador = []
  let comprarMaisCartas
  let acabouJogo = false
  function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]

    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]

    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]

    let valor

    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
      valor = Number(numero)
    }

    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
      texto: numero + naipe,
      valor: valor
    }

    return carta
  }
  function comecoJogo(maoJogador){
    mao = []
    for(let i = 0; i <2; i++)
      mao += maoJogador.push(comprarCarta())
    return mao
  }
  function limparMao(maoJogador){
    mao = []
    for(let i = 0; i <maoJogador.length;)
      mao += maoJogador.pop()
      return mao
  }
  function calcularValorCartas (maoJogador){
    let soma = 0;
    for( let i = 0; i < maoJogador.length; i++){
      soma += maoJogador[i].valor
    }
    return soma
  }
  function listarCartas (maoJogador){
    mao = []
    for(i=0; i<maoJogador.length; i++) {
      mao += maoJogador[i].texto +" "
    }
    return mao
  }
  console.log("Bem vindo ao jogo de Black Jack!")
  continuar = confirm("Quer iniciar uma nova rodada?")
  while(continuar){
  acabouJogo = false

  //comecar o jogo distribuindo 2 cartas para o usuario e o computador
  limparMao(maoUsuario)
  limparMao(maoComputador)
  comecoJogo(maoUsuario)
  comecoJogo(maoComputador)
  
  //se o jogador ou computador comecarem com mais que 21 pontos, sua mao é zerada e eles ganham duas novas cartas
  if(calcularValorCartas(maoUsuario) > 21){
    limparMao(maoUsuario)
    comecoJogo(maoUsuario)
  }else if (calcularValorCartas(maoComputador) > 21){
    limparMao(maoComputador)
    comecoJogo(maoComputador)
  }
  comprarMaisCartas = confirm (`Suas cartas são ${listarCartas(maoUsuario)}. A carta revelada do computador é ${maoComputador[0].texto}. Deseja comprar mais uma carta?`)
  while(comprarMaisCartas){
    maoUsuario.push(comprarCarta())
    if(calcularValorCartas(maoUsuario) >21){
      alert(`Suas cartas são ${listarCartas(maoUsuario)}. Sua pontuação é ${calcularValorCartas(maoUsuario)}. As cartas do computador sao ${listarCartas(maoComputador)}. A pontuação do computador é ${calcularValorCartas(maoComputador)}. O computador ganhou`)
      comprarMaisCartas = false
      acabouJogo = true
    }else if (calcularValorCartas(maoUsuario) <= 21){
    comprarMaisCartas = confirm (`Suas cartas são ${listarCartas(maoUsuario)}. A carta revelada do computador é ${maoComputador[0].texto}. Deseja comprar mais uma carta?`)
    }
  }
    
  
    while(!acabouJogo){
      if(calcularValorCartas(maoUsuario) === calcularValorCartas(maoComputador)){
        alert(`Suas cartas são ${listarCartas(maoUsuario)}. Sua pontuação é ${calcularValorCartas(maoUsuario)}. As cartas do computador sao ${listarCartas(maoComputador)}. A pontuação do computador é ${calcularValorCartas(maoComputador)}. Empate!`)
        acabouJogo = true
      }else if (calcularValorCartas(maoUsuario) > calcularValorCartas(maoComputador)){
        maoComputador.push(comprarCarta())
        if(calcularValorCartas(maoComputador) > 21 ){
          alert(`Suas cartas são ${listarCartas(maoUsuario)}. Sua pontuação é ${calcularValorCartas(maoUsuario)}. As cartas do computador sao ${listarCartas(maoComputador)}. A pontuação do computador é ${calcularValorCartas(maoComputador)}. O usuario ganhou!!`)
          acabouJogo = true
        }else if (calcularValorCartas(maoUsuario) < calcularValorCartas(maoComputador)){
          alert(`Suas cartas são ${listarCartas(maoUsuario)}. Sua pontuação é ${calcularValorCartas(maoUsuario)}. As cartas do computador sao ${listarCartas(maoComputador)}. A pontuação do computador é ${calcularValorCartas(maoComputador)}. O computador ganhou!!`)
          acabouJogo = true
        }
      }else{
        alert(`Suas cartas são ${listarCartas(maoUsuario)}. Sua pontuação é ${calcularValorCartas(maoUsuario)}. As cartas do computador sao ${listarCartas(maoComputador)}. A pontuação do computador é ${calcularValorCartas(maoComputador)}. O computador ganhou!!`)
        acabouJogo = true
      }
    }
  
  continuar = confirm("Quer iniciar uma nova rodada?")  
  }
  console.log("O jogo Acabou!")
}  
ex1()