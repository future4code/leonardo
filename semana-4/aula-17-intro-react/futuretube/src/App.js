import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <div><p>Future<span> Tube</span></p></div>
      <div><input type="text"placeholder="Busca"/> <button className="button">Busca</button></div>
      </div>
      <main>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Em alta</a></li>
            <li><a href="#">Inscrições</a></li>
            <li><a href="#">Originais</a></li>
            <hr></hr>
            <li><a href="#">Biblioteca</a></li>
            <li><a href="#">Histórico</a></li>
          </ul>
        </nav>
        <section>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=1" className="imagem" alt=""></img>
          <h3>Video 1</h3>
          <p>Mais algo do video</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=2" className="imagem" alt=""></img>
          <h3>Video 2</h3>
          <p>subtitulo</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=3" className="imagem" alt=""></img>
          <h3>Outro Titulo do video</h3>
          <p>teste</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=4" className="imagem" alt=""></img>
          <h3>Mais 1 Titulo do video</h3>
          <p>Ipsum</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=5" className="imagem" alt=""></img>
          <h3>Video 5</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=6" className="imagem" alt=""></img>
          <h3>Titulo do video 6</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=7" className="imagem" alt=""></img>
          <h3>Titulo do video perdi a conta</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=8" className="imagem" alt=""></img>
          <h3>Titulo do video de novo</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=11" className="imagem" alt=""></img>
          <h3>Video 19</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=22" className="imagem" alt=""></img>
          <h3>Video 23</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=33" className="imagem" alt=""></img>
          <h3>Outro Titulo do video 2</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=44" className="imagem" alt=""></img>
          <h3>Mais 11 Titulo do video</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=55" className="imagem" alt=""></img>
          <h3>Video 53</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=66" className="imagem" alt=""></img>
          <h3>Titulo do video 61</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=77" className="imagem" alt=""></img>
          <h3>Titulo do video perdi a conta 2</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=88" className="imagem" alt=""></img>
          <h3>Titulo do video 34</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
        </section>
        </main>
      <div className="footer">
      <p>Aqui mora o Footer, acho que o YT nao tem</p>
      </div>
    </div>
  );
}

export default App;
