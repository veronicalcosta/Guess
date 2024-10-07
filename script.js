function jogoDeAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Número entre 1 e 100
    let palpite = null;
    let tentativas = 0;
  
    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");
  
    while (palpite !== numeroAleatorio) {
      palpite = parseInt(prompt("Digite o seu palpite:"));
      tentativas++;
  
      if (palpite > numeroAleatorio) {
        console.log("Muito alto! Tente um número menor.");
      } else if (palpite < numeroAleatorio) {
        console.log("Muito baixo! Tente um número maior.");
      } else if (isNaN(palpite)) {
        console.log("Isso não é um número válido. Tente novamente.");
      } else {
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
      }
    }
  }
  
  jogoDeAdivinhacao();
  