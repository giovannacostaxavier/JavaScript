let btnSoma=document.querySelector("#btnSoma")
let btnSubtracao=document.querySelector("#btnSubtracao")
let btnMultiplicacao=document.querySelector("#btnMultiplicacao")
let btnDivisao=document.querySelector("#btnDivisao")
const op = [
    (valores)=>{
        let res = 0
        for (v of valores) {
            res += v 
        }
        return res
    },

    (valores)=>{
        let res = 0
        for (v of valores) {
            res -= v 
        }
        return res
    },

    (valores)=>{
        let res = 1
        for (v of valores) {
            res *= v 
        }
        return res
    },

    (valores)=>{
        let res = 0
        for (v of valores) {
            res /= v 
        }
        return res
    }
]