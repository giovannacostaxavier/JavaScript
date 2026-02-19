let btnSoma=document.querySelector("#btnSoma")
let btnSubtracao=document.querySelector("#btnSubtracao")
let btnMultiplicacao=document.querySelector("#btnMultiplicacao")
let btnDivisao=document.querySelector("#btnDivisao")
let resultado=document.querySelector("#resultado")
let valor1=document.querySelector("#t1")
let valor2=document.querySelector("#t2")

const op = [
    ()=>{  
        resultado.value=Number(valor1.value)+Number(valor2.value)
    },

    ()=>{
        resultado.value=Number(valor1.value)-Number(valor2.value)
    },

    ()=>{
        resultado.value=Number(valor1.value)*Number(valor2.value)
    },

    ()=>{
        resultado.value=Number(valor1.value)/Number(valor2.value)
    }
]
    btnSoma.addEventListener('click',op[0])
    btnSubtracao.addEventListener('click',op[1])
    btnMultiplicacao.addEventListener('click',op[2])
    btnDivisao.addEventListener('click',op[3])