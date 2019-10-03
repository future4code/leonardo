import React from 'react';
import './App.css';
import './Post.css';
import { Post } from './Post'
import { CreatePost } from './CreatePost';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaPosts: [  
        {
          fotoPerfil: "https://picsum.photos/20/20?a=3",
          nomePost: "autor1",
          imagemPost: "https://picsum.photos/300/200?a=4",
        },
  
        {
          fotoPerfil: "https://picsum.photos/20/20?a=6",
          nomePost: "autor2",
          imagemPost: "https://picsum.photos/300/200?a=5",
        }, 
  
       {
          fotoPerfil: "https://picsum.photos/20/20?a=8",
          aunomePosttor: "autor3",
          imagemPost: "https://picsum.photos/300/200?a=9",
        } 
      ]
  }}

  onChangeNome = (event) => {
      this.setState({nomePost: event.target.value})
  }

  onChangeFotoPerfil = (event) => {
      this.setState({fotoPerfil: event.target.value})
  }

  onChangeImagemPost = (event) => {
      this.setState({imagemPost: event.target.value})
  }

  inserirNovoPost = () => {
     
      let capturaPost = {
          nomePost: this.state.nomePost,
          fotoPerfil: this.state.fotoPerfil,
          imagemPost: this.state.imagemPost
        }
      const listaPostsCopia = [...this.state.listaPosts, capturaPost]
      
      this.setState({
        listaPosts: listaPostsCopia,
        nomePost: '',
        fotoPerfil:'',
        imagemPost:'',
      })
      console.log(capturaPost)
  }
  

  render(){
  
  const listaPosts = [  
      {
        imagemAutor: "https://picsum.photos/20/20?a=3",
        autor: "autor1",
        imagem: "https://picsum.photos/300/200?a=4",
      },

      {
        imagemAutor: "https://picsum.photos/20/20?a=6",
        autor: "autor2",
        imagem: "https://picsum.photos/300/200?a=5",
      }, 

     {
        imagemAutor: "https://picsum.photos/20/20?a=8",
        autor: "autor3",
        imagem: "https://picsum.photos/300/200?a=9",
      } 
  ]
  
  
  const listaConteudoPots = listaPosts.map((_,index) =>{
    return <Post
            key={index}
            imagemAutor={listaPosts[index].imagemAutor}
            autor={listaPosts[index].autor}
            imagem={listaPosts[index].imagem}/>
  })
    return (
    <div className="App">
      <div className="novoPost">
        <p>Digite o seu nome</p>
        <input type="text" value={this.nomePost} onChange={this.onChangeNome}/>
        <p>Insira a foto do seu perfil</p>
        <input type="text" value={this.state.fotoPerfil} onChange={this.onChangeFotoPerfil}/>
        <p>Insira sua foto</p>
        <input type="text" value={this.state.imagemPost} onChange={this.onChangeImagemPost}/>
        <div>
        <button onClick={this.inserirNovoPost}>Enviar</button>
        </div>
    </div>
        {listaConteudoPots}
      
      
    </div>

  );
}
}

export default App;
