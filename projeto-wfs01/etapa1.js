function ex1(){
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
  let pontuacaoUsuario
  let pontuacaoComputador
  let cartasMaoUsuario
  let cartasMaoComputador 
  console.log("Bom vindo ao jogo de BlackJack!")
  let continuaJogando = confirm("Quer iniciar uma nova rodada?")

  while (continuaJogando){
      //insere as cartas na mao do usuario
      cartasMaoUsuario = {carta1: comprarCarta(), carta2: comprarCarta()}
      //issere as cartas na mao do computador
      cartasMaoComputador = {carta1: comprarCarta(), carta2: comprarCarta()}
      //gera a pontuacao do usuario
      pontuacaoUsuario = Number(cartasMaoUsuario.carta1.valor + cartasMaoUsuario.carta2.valor)
      //gera a pontuacao do computador
      pontuacaoComputador = Number(cartasMaoComputador.carta1.valor + cartasMaoComputador.carta2.valor)
      //imprime as cartas e pontuacao do usuario, usando a notacao templete string
      console.log(`Usuario - cartas: ${cartasMaoUsuario.carta1.texto}${cartasMaoUsuario.carta2.texto} pontuacao ${pontuacaoUsuario} `)
      //imprime as cartas e pontuacao do computador, usando a notacao templete string
      console.log(`Computador - cartas: ${cartasMaoComputador.carta1.texto}${cartasMaoComputador.carta2.texto} pontuacao ${pontuacaoComputador} `)
      //confere qual a pontuacao maior e o caso de empate
      if(pontuacaoUsuario > pontuacaoComputador){
        console.log("Usuario Ganhou!")
      }else if (pontuacaoComputador > pontuacaoUsuario){
        console.log("Computador Ganhou!")
      }else{
        console.log("Empate")
      }
      //verifica se o usuario deseja jogar novamente
      continuaJogando = confirm("Quer iniciar uma nova rodada?")
  } 
  console.log("O Jogo Acabou")
}
function ex2(){
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
let pontuacaoUsuario =0
  let pontuacaoComputador = 0
  let cartasMaoUsuario =[]
  let cartasMaoComputador = []
  console.log("Bom vindo ao jogo de BlackJack!")
  let continuaJogando = confirm("Quer iniciar uma nova rodada?")

  while (continuaJogando){
      //insere as cartas na mao do usuario
      cartasMaoUsuario.push(comprarCarta());
      cartasMaoUsuario.push(comprarCarta());
      //issere as cartas na mao do computador
      cartasMaoComputador.push(comprarCarta());
      cartasMaoComputador.push(comprarCarta());
      //gera a pontuacao do usuario
     
      
      for(let i=0; i<cartasMaoUsuario.length; i++){
      pontuacaoUsuario += Number(cartasMaoUsuario[i].valor);
      }
      

      
      //gera a pontuacao do computador
      for(let i=0; i<cartasMaoComputador.length; i++){
      pontuacaoComputador += Number(cartasMaoComputador[i].valor);
      }
    
      //imprime as cartas e pontuacao do usuario, usando a notacao templete string
      console.log(`Usuario - cartas: ${cartasMaoUsuario[0].texto}${cartasMaoUsuario[1].texto} pontuacao ${pontuacaoUsuario} `)
      //imprime as cartas e pontuacao do computador, usando a notacao templete string
      console.log(`Computador - cartas: ${cartasMaoComputador[0].texto}${cartasMaoComputador[1].texto} pontuacao ${pontuacaoComputador} `)
      //confere qual a pontuacao maior e o caso de empate
      if(pontuacaoUsuario > pontuacaoComputador){
        console.log("Usuario Ganhou!")
      }else if (pontuacaoComputador > pontuacaoUsuario){
        console.log("Computador Ganhou!")
      }else{
        console.log("Empate")
      }
      //verifica se o usuario deseja jogar novamente
      continuaJogando = confirm("Quer iniciar uma nova rodada?")
  } 
  console.log("O Jogo Acabou")
}
