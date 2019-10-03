import React from 'react';
import './App.css';
import './Post.css';
import { Post } from './Post'
import { CreatePost } from './CreatePost';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      

    }
  
  }
  
  inserirNovoPost = () => {
    console.log("fui clicado")
    console.log(this.nomePost)
}
  render(){
  
    
  // let novoPostCaptura = this.CreatePost.nomePost;
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
            imagemAutor={listaPosts[index].imagemAutor}
            autor={listaPosts[index].autor}
            imagem={listaPosts[index].imagem}/>
  })
    return (
    <div className="App">
      <CreatePost inserirNovoPost={this.inserirNovoPost} />
      {listaConteudoPots}
      
      
    </div>

  );
}
}

export default App;
