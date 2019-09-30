import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <p>Future tube</p>
      <input type="text"placeholder="Busca"/>
      </div>
      <main>
        <nav>
          <ul>
            <li><a href="futureTube.html">Inicio</a></li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
            <hr></hr>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </nav>
        <section>

        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=1" className="imagem" alt=""></img>
          <div className="tituloVideo"><h5>Video 1</h5></div>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=2" className="imagem" alt=""></img>
          <h5>Video 2</h5>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=3" className="imagem" alt=""></img>
          <h5>Outro Titulo do video</h5>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=4" className="imagem" alt=""></img>
          <h5>Mais 1 Titulo do video</h5>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=5" className="imagem" alt=""></img>
          <h5>Video 5</h5>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=6" className="imagem" alt=""></img>
          <h5>Titulo do video 6</h5>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=7" className="imagem" alt=""></img>
          <h5>Titulo do video perdi a conta</h5>
        </article>
        <article className="video-card">
          <img src="http://picsum.photos/400/200?a=8" className="imagem" alt=""></img>
          <h5>Titulo do video</h5>
        </article>

        </section>
        </main>
      <div className="footer">
      <p>Aqui mora o Footer</p>
      </div>
    </div>
  );
}

export default App;
