const cursoSel = document.getElementById("cursoSelecionado");

cursoSel.addEventListener("click", () => {
    const radioSelecionado = document.querySelector('input[type="radio"]:checked');
    const texto = radioSelecionado.previousElementSibling.textContent;
    alert(texto);
});
