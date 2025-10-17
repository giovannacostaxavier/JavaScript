let fruta1 = ['banana','maça','manga']
let fruta2 = ['uva','morango']
let todasAsFrutas = [...fruta1,...fruta2]
//console.log(todasAsFrutas);

let legumes = ['batata','cebola','beterraba']
let NovoLegumes = ['abobrinha',...legumes,'mandioca']
//console.log(NovoLegumes);

let jogador1 = {nome:'Gabriela',energia:100,vidas:3}
let jogador2 = {...jogador1}
//console.log(jogador2);

const produtos1 = {
    geladeira:200,
    microondas:100,
    ferroDePassar:80
}
const produtos2 = {
    notebook:250,
    celular:350
}
const todosOsProdutos = {...produtos1,...produtos2}
//console.log(todosOsProdutos);

let usuario1 = {
    nome:'Vanessa',
    idade:25,
    telefone:969256452,
}
let usuario2 = {
    ...usuario1,
    nome:'Valeria'
}
//console.log(usuario2);

let nome = 'Gabriela'
let separarNome = [...nome]
//console.log(separarNome);



