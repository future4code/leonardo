function criarItem(){
    let itemInput = document.querySelector("input").value;
    let diaSemana = document.getElementById("diaDaSemana").value;
    if (itemInput === ""){
        alert("Informe a tarefa que deseja adicionar");
    }else if (diaSemana === "segunda"){
        document.getElementById("segunda").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("segunda").onclick = riscaItem;
    }else if (diaSemana === "terca"){
        document.getElementById("terca").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("terca").onclick = riscaItem;
    }else if (diaSemana === "quarta"){
        document.getElementById("quarta").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("terca").onclick = riscaItem;
    }else if (diaSemana === "quinta"){
        document.getElementById("quinta").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("terca").onclick = riscaItem;
    }else if (diaSemana === "sexta"){
        document.getElementById("sexta").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("terca").onclick = riscaItem;
    }else if (diaSemana === "sabado"){
        document.getElementById("sabado").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("terca").onclick = riscaItem;
    }else if (diaSemana === "domingo"){
        document.getElementById("domingo").innerHTML += "<li>" + itemInput + "</li>";
        document.getElementById("terca").onclick = riscaItem;
    }
    document.querySelector("input").value = "";
}

function riscaItem(event){
    const target = event.target;
    const value = target.innerHTML;
    value.innerHTML = "teste";
}

function Limpar(){

}
