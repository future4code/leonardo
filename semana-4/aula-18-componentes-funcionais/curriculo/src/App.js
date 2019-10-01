import React from 'react';
import { BigCard } from './components/BigCard/BigCard'
import './App.css';
import { SmallCard } from './components/SmallCard/SmallCard';
import { ImageButton } from './components/ImageButton/ImageButton';
import imagemEmail from './images/email.svg'
import imagemEndereco from './images/house.svg'
import imagemVejaMais from './images/expand.svg'
import imagemFacebook from './images/facebook.png'
import { PageSelection } from './components/PageSelection/PageSelection';

const pessoa = {
  imagem: 'https://picsum.photos/200/100?a=3',
  nome: 'Leonardo Nogueira',
  descricao: 'Está é uma pequena descrição para teste'
}

const email = {
  imagem: imagemEmail,
  text: 'email: ',
  conteudo: 'leonardocpn@gmail.com'
}

const endereco = {
  imagem: imagemEndereco,
  text: 'Endereco: ',
  conteudo: 'Rua Azul, 123'
}

const vejaMaisBtn = {
  imagem: imagemVejaMais,
  text: 'Veja Mais'
}

const facebookBtn = {
  imagem: imagemVejaMais,
  text: 'Facebook'
}

const dadosPessoais = {
  titulo: 'Dados Pessoais',
}

const dadosProfissionais = {
  titulo: 'Experiencias Profissionais',
}

const redesSociais = {
  titulo: 'Redes Sociais',
}

const expProfissional1 = {
  imagem: 'https://picsum.photos/200/100?a=5',
  text: 'Emprego1',
  conteudo: 'Trabalhei muito'
}

const expProfissional2 = {
  imagem: 'https://picsum.photos/200/100?a=6',
  text: 'Emprego2',
  conteudo: 'Trabalhei menos'
}

function App() {
  return (
    <div className="App">
      <PageSelection titulo={dadosPessoais.titulo}>
        <BigCard imagem={pessoa.imagem} nome={pessoa.nome} descricao={pessoa.descricao}/>
        <SmallCard imagem={email.imagem} text={email.text} conteudo={email.conteudo}/>
        <SmallCard imagem={endereco.imagem} text={endereco.text} conteudo={endereco.conteudo}/>
        <ImageButton imagem={vejaMaisBtn.imagem} text={vejaMaisBtn.text}/>
      </PageSelection>
      <PageSelection titulo={dadosProfissionais.titulo}>
        <BigCard imagem={expProfissional1.imagem} nome={expProfissional1.nome} descricao={expProfissional1.conteudo}/>
        <BigCard imagem={expProfissional2.imagem} nome={expProfissional2.nome} descricao={expProfissional2.conteudo}/>
      </PageSelection>
      <PageSelection titulo={redesSociais.titulo}>
        <ImageButton imagem={vejaMaisBtn.imagem} text={facebookBtn.text}/>  
      </PageSelection>
    </div>
  );
}

export default App;
