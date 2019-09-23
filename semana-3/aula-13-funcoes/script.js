function criarItem(){
    let itemInput = document.querySelector("input").value;
    let diaSemana = document.querySelector("#" + diaDaSemana.value);
    let newLi = document.createElement("li");
    newLi.innerHTML = itemInput;
    newLi.onclick = riscaItem;
    diaSemana.appendChild(newLi);
    document.querySelector("input").value = "";
}

function riscaItem(event){
    const target = event.target;
    const value = target.innerHTML;
    target.parentNode.removeChild(target);
}

function limparTela(){
    window.location.reload();
}
