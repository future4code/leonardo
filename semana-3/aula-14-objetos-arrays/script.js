function buscaItem(chave) {
    const valor = window.localStorage.getItem(chave);
        if (valor) {
        return JSON.parse(valor);
    }
    return [];
}

const aluno = buscaItem("alunoSalvo")
const exibeAluno = document.querySelector(".container")
console.log(aluno.length)
for ( i = 0; i < aluno.length; i++){
    exibeAluno.innerHTML += `<div><p>Aluno: ${aluno[i].Nome}</p>
                            <p>Idade: ${aluno[i].Idade}</p>
                            <p>Email: ${aluno[i].Email}</p>
                            <button onclick="deletarAluno()">Deletar</button></div>` 
}

function limparTudo() {
    if (confirm("Tem certeza que deseja apagar todos os alunos?")){
        window.localStorage.clear("alunoSalvo")
        location.reload()
    }
}
    
function deletarAluno(){
    if (confirm("Tem certeza que deseja deletar este aluno?")){
        window.localStorage.removeItem("alunoSalvo[0]")
        location.reload()
        }
}