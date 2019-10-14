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
}const listaDeBrinquedos = [{
  id: 1,
  imagem: 'usaremos uma estatica',
  nome: '#14 clone trooper',
  valor: 50,
  tipo: 'action figure',
 },
 {id: 2,
  imagem: 'usaremos uma estatica',
  nome: 'Darth Vader',
  valor: 70,
  tipo: 'action figure',
 },
 {id: 3,
  imagem: 'usaremos uma estatica',
  nome: 'TIE Fighter',
  valor: 100,
  tipo: 'espaçonave',
 },
 {id: 4,
  imagem: 'usaremos uma estatica',
  nome: 'BB*',
  valor: 150,
  tipo: 'brinquedo de controle remoto',
 },
 {id: 5,
  imagem: 'usaremos uma estatica',
  nome: 'Destroyer',
  valor: 250,
  tipo: 'lego',
 },
 {id: 6,
  imagem: 'usaremos uma estatica',
  nome: 'Storm Strooper',
  valor: 70,
  tipo: 'lego',
 },
 {id: 7,
  imagem: 'usaremos uma estatica',
  nome: 'Espaçonave Rebeldes',
  valor: 90,
  tipo: 'lego',
 },
 {id: 8,
  imagem: 'usaremos uma estatica',
  nome: 'Hailfare Droid',
  valor: 80,
  tipo: 'lego',
 }]