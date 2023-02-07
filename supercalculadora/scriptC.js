function start() {
  var buttonCalcular = document.querySelector("#calcular");
  buttonCalcular.addEventListener("click", handleButtonClick);

  var entradaA = document.querySelector("#numero-A");
  var entradaB = document.querySelector("#numero-B");

  entradaA.addEventListener("input", handleButtonClick);
  entradaB.addEventListener("input", handleButtonClick);

  handleButtonClick();
}

function calcularSoma(numeroA, numeroB) {
  return numeroA + numeroB;
}

function calculaSubtracao(numeroA, numeroB) {
  return numeroA - numeroB;
}
function calculaSubtracaoBA(numeroA, numeroB) {
  return numeroB - numeroA;
}

function calcularDivisaoAB(numeroA, numeroB) {
  return numeroA / numeroB;
}
function calcularDivisaoBA(numeroA, numeroB) {
  return numeroB / numeroA;
}

function calcularMultiplicacao(numeroA, numeroB) {
  return numeroA * numeroB;
}

function calcularPotenciaA(numeroA, numeroB) {
  return numeroA ** numeroB;
}

function calcularPotenciaB(numeroA, numeroB) {
  return numeroB ** numeroA;
}

function calcularRaizQA(numeroA) {
  return Math.sqrt(numeroA);
}
function calcularRaizQB(numeroB) {
  return Math.sqrt(numeroB);
}

function calcularFatorialA(numeroA) {
  // Se o número for inferior a 0, rejeite-o.
  var naoE = "Não existe!";
  if (numeroA < 0) return naoE;
  // Se o número for 0, seu fatorial é 1.
  else if (numeroA == 0) return 1;
  // Caso contrário, chame o procedimento de recursão novamente
  else {
    var resultado = numeroA;
    for (var i = 1; i < numeroA; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

function calcularFatorialB(numeroB) {
  // Se o número for inferior a 0, rejeite-o.
  var naoE = "Não existe!";
  if (numeroB < 0) return naoE;
  // Se o número for 0, seu fatorial é 1.
  else if (numeroB == 0) return 1;
  // Caso contrário, chame o procedimento de recursão novamente
  else {
    var resultado = numeroB;
    for (var i = 1; i < numeroB; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

function calcularPorcentagemAB(numeroA, numeroB) {
  return (numeroA / numeroB) * 100;
}

function calcularPorcentagemBA(numeroA, numeroB) {
  return (numeroB / numeroA) * 100;
}

function calcularMedia(numeroA, numeroB) {
  return (numeroA + numeroB) / 2;
}

function handleButtonClick() {
  var entradaA = document.querySelector("#numero-A");
  var entradaB = document.querySelector("#numero-B");
  var resultadoSoma = document.querySelector("#soma-result");
  var resultadoSubtracao = document.querySelector("#subtracao-result");
  var resultadoSubtracaoBA = document.querySelector("#subtracaoBA-result");
  var resultadoDivisaoAB = document.querySelector("#divisaoAB-result");
  var resultadoDivisaoBA = document.querySelector("#divisaoBA-result");
  var resultadoMultiplicacao = document.querySelector("#multiplicacao-result");
  var resultadoPotenciaA = document.querySelector("#PotenciaAB-result");
  var resultadoPotenciaB = document.querySelector("#PotenciaBA-result");
  var resultadoRaizQA = document.querySelector("#raizQA-result");
  var resultadoRaizQB = document.querySelector("#raizQB-result");
  var resultadoFatorialA = document.querySelector("#FatorialA-result");
  var resultadoFatorialb = document.querySelector("#FatorialB-result");
  var resultadoPorcentagemAB = document.querySelector("#PorcAB-result");
  var resultadoPorcentagemBA = document.querySelector("#PorcBA-result");

  var resultadoMedia = document.querySelector("#Media-result");

  var numeroA = Number(entradaA.value);
  var numeroB = Number(entradaB.value);

  var somas = calcularSoma(numeroA, numeroB);
  var subtra = calculaSubtracao(numeroA, numeroB);
  var subtraBA = calculaSubtracaoBA(numeroA, numeroB);
  var divisaAB = calcularDivisaoAB(numeroA, numeroB).toFixed(2);
  var divisaBA = calcularDivisaoBA(numeroA, numeroB).toFixed(2);
  var multipli = calcularMultiplicacao(numeroA, numeroB).toFixed(2);
  var potenciaA = calcularPotenciaA(numeroA, numeroB);
  var potenciaB = calcularPotenciaB(numeroA, numeroB);
  var raizqA = calcularRaizQA(numeroA).toFixed(2);
  var raizqB = calcularRaizQB(numeroB).toFixed(2);
  var fatorialA = calcularFatorialA(numeroA);
  var fatorialB = calcularFatorialB(numeroB);
  var porcenAB = calcularPorcentagemAB(numeroA, numeroB).toFixed(0);
  var porcenBA = calcularPorcentagemBA(numeroA, numeroB).toFixed(0);
  var media = calcularMedia(numeroA, numeroB);

  // var formattedSoma = Soma.toFixed(2).replace(".", ",");

  resultadoSoma.textContent = somas;
  resultadoSubtracao.textContent = subtra;
  resultadoSubtracaoBA.textContent = subtraBA;
  resultadoDivisaoAB.textContent = divisaAB;
  resultadoDivisaoBA.textContent = divisaBA;
  resultadoMultiplicacao.textContent = multipli;
  resultadoPotenciaA.textContent = potenciaA;
  resultadoPotenciaB.textContent = potenciaB;
  resultadoRaizQA.textContent = raizqA;
  resultadoRaizQB.textContent = raizqB;
  resultadoFatorialA.textContent = fatorialA;
  resultadoFatorialb.textContent = fatorialB;
  resultadoPorcentagemAB.textContent = porcenAB;
  resultadoPorcentagemBA.textContent = porcenBA;
  resultadoMedia.textContent = media;
}

start();
