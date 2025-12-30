const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector(".btn")
const cursos=[...document.querySelectorAll(".cursos")]
    
const novaDiv=document.createElement("div")
novaDiv.setAttribute("class","cursos")
novaDiv.setAttribute("id","c10")
novaDiv.innerHTML="Canvas"
caixa1.appendChild(novaDiv)

// cursos.forEach((el)=>{
//     el.addEventListener("click",(evt)=>{
//         const todosCursos= evt.target
//         todosCursos.classList.toggle("selecionado")
//     })
// })
caixa1.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("cursos")) {
        evt.target.classList.toggle("selecionado");
    }
});


btn.addEventListener("click",()=>{
    const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
    const cursoNaoSelecionado=[...document.querySelectorAll(".cursos:not(.selecionado)")]
    cursoSelecionado.forEach((el)=>{
        caixa2.appendChild(el)
    })
    cursoNaoSelecionado.forEach((el)=>{
        caixa1.appendChild(el)
    })
})
