import React from 'react';
import './App.css';


export class Cadastro extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        valorDespesa:"",
        valorTipoDespesa:"",
        valorDescricaoDespesa:"",
        listaDespesas:[]
      }
      
  }
  
  atualizaValorDespesa = event => {
    this.setState({ valorDespesa: event.target.value });
  };

  atualizaTipoDespesa = event => {
    this.setState({ valorTipoDespesa: event.target.value });
  };

  atualizaDescricaoDespesa = event => {
    this.setState({ valorDescricaoDespesa: event.target.value });
  };

  salvarDespesaLista = () => {
      const novaDespesa = {
          id:Date.now(),
          valor: this.state.valorDespesa,
          tipo: this.state.valorTipoDespesa,
          descricao: this.state.valorDescricaoDespesa
      }
      const copiaListaDespesa = [...this.state.listaDespesas, novaDespesa]

      this.setState({
        listaDespesas: copiaListaDespesa,
        valorDespesa:"",
        valorTipoDespesa:"",
        valorDescricaoDespesa:"",
        })
  }
    render(){
        
        return (
        <div>
            <h1>CADASTRO</h1>
            <p>Valor</p>
            <input
                type="text"
                placeholder="Digite o valor "
                value={this.state.valorDespesa}
                onChange={this.atualizaValorDespesa}
            />
            <p>Tipo</p>
            <select 
                name="tipoDespesa"
                value={this.state.valorTipoDespesa}
                onChange={this.atualizaTipoDespesa}
            >
                <option value="Fixa">Fixa</option>
                <option value="Comida">Comida</option>
                <option value="Diversao">Diversão</option>
            </select>
            <p>Descrição</p>
            <input
                type="text"
                placeholder="Uma breve descrição"
                value={this.state.valorDescricaoDespesa}
                onChange={this.atualizaDescricaoDespesa}
                />
            <div>
                <button onClick={this.salvarDespesaLista}>Salvar Despesa</button>
                <button onclick={this.props.consultarExtrato}>Consultar Extrato</button>
            </div>
        </div>
    );}
}

