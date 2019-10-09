import React from 'react';
import './App.css';

export function Extrato() {
  return (
    <div>
        <h1>Extrato</h1>
        <p>Valor Maximo</p>
        <input type="text"/>
        <p>Valor Minimo</p>
        <input type="text"/>
        <p>Tipo</p>
        <select name="tipoDespesa" >
            <option value="Fixa">Fixa</option>
            <option value="Comida">Comida</option>
            <option value="Diversao">Diversão</option>
        </select>
        <button>Filtrar</button>
    </div>
  )
}