let primeiroNumero;
let segundoNumero;
let operador;
let resultado;

primeiroNumero = parseInt(prompt('Bem vindo a calculadora. \n \n Digite o primeiro numero: '))

segundoNumero = parseInt(prompt('Entre com o segundo numero: '))

operador = prompt('Escolha o operador para realizar o calculo: \n \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Sair ')


if (operador == 1 ) {
    funcaoSoma()
}
if(operador == 2 ) {
    funcaoSubtracao()
}
if(operador == 3) {
    funcaoMultiplicacao()
}
if(operador == 4 ) {
    funcaoDivisao();
}
if(operador == 5) {
    sair
}
function funcaoSoma () {
    resultado = primeiroNumero + segundoNumero;

    alert(`O resultado é ${resultado}`)
}
function funcaoSubtracao () {
    resultado = primeiroNumero - segundoNumero;

    alert(`O resultado é ${resultado}`)
}
function funcaoMultiplicacao () {
    resultado = primeiroNumero * segundoNumero;

    alert(`O resultado é ${resultado}`)
}
function funcaoDivisao () {
    resultado = primeiroNumero / segundoNumero;

    alert(`O resultado é: ${resultado}`)
}
function sair () {
    alert('Obrigado')
}






