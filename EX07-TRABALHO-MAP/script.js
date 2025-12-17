const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector(".btn")
const cursos=[...document.querySelectorAll(".cursos")]

cursos.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        const todosCursos= evt.target
        todosCursos.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
    cursoSelecionado.forEach((el)=>{
        caixa2.appendChild(el)
    })
})