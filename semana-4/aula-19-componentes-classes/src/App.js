import React from 'react';
import './App.css';
import './Post.css';
import imgLike from './images/favorite-white.svg'
import imgNotLike from './images/favorite.svg'
import imgComment from './images/comment_icon.svg'
import { Post } from './Post'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  
  }
  

  render(){
    
    const post1 = {
      imagemAutor: "https://picsum.photos/20/20?a=3",
      autor: "autor1",
      imagem: "https://picsum.photos/300/200?a=4",
      imagemLike: imgLike,
      imagemComment: imgComment,
    } 

    const post2 = {
      imagemAutor: "https://picsum.photos/20/20?a=6",
      autor: "autor2",
      imagem: "https://picsum.photos/300/200?a=5",
      imagemLike: imgLike,
      imagemComment: imgComment,
    } 

    const post3 = {
      imagemAutor: "https://picsum.photos/20/20?a=8",
      autor: "autor3",
      imagem: "https://picsum.photos/300/200?a=9",
      imagemLike: imgLike,
      imagemComment: imgComment,
    } 
    
    
    return (
    <div className="App">
      <Post imagemAutor={post1.imagemAutor}
                        autor={post1.autor}
                        imagem={post1.imagem}
                        
                        
                        imagemComment={post1.imagemComment}/>
      <Post imagemAutor={post2.imagemAutor}
                        autor={post2.autor}
                        imagem={post2.imagem}
                        
                        
                        imagemComment={post2.imagemComment}/>
      <Post imagemAutor={post3.imagemAutor}
                        autor={post3.autor}
                        imagem={post3.imagem}
                        
                        
                        imagemComment={post3.imagemComment}/>
    </div>
  );
}
}

export default App;
