const cursoSel= document.getElementById("cursoSelecionado")
const todosRadios= [...document.querySelectorAll("input[type:radio]")]


cursoSel.addEventListener("click",(evt)=>{
    let radioSel= cursoSel.filter((el)=>{
        return el.checked
    })
})