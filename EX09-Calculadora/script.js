let btnSoma=document.querySelector("#btnSoma")
let btnSubtracao=document.querySelector("#btnSubtracao")
let btnMultiplicacao=document.querySelector("#btnMultiplicacao")
let btnDivisao=document.querySelector("#btnDivisao")
let resultado=document.querySelector("#resultado")

const op = [
    ()=>{
        let valor1=document.querySelector("#t1").value
        let valor2=document.querySelector("#t2").value
        resultado.value=Number(valor1)+Number(valor2)
    },

    ()=>{
        let valor1=document.querySelector("#t1").value
        let valor2=document.querySelector("#t2").value
        resultado.value=Number(valor1)-Number(valor2)
    },

    ()=>{
        let valor1=document.querySelector("#t1").value
        let valor2=document.querySelector("#t2").value
        resultado.value=Number(valor1)*Number(valor2)
    },

    ()=>{
        let valor1=document.querySelector("#t1").value
        let valor2=document.querySelector("#t2").value
        resultado.value=Number(valor1)/Number(valor2)
    }
]
    btnSoma.addEventListener('click',op[0])
    btnSubtracao.addEventListener('click',op[1])
    btnMultiplicacao.addEventListener('click',op[2])
    btnDivisao.addEventListener('click',op[3])