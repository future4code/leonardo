import React from 'react';
import CreatePlaylist from './Components/CreatePlaylist/CreatePlaylist'
import './App.css';
import ShowPlaylist from './Components/ShowPlaylist/ShowPlaylist'
import AddMusicToPlaylist from './Components/AddMusicToPlaylist/AddMusicToPlaylist'


function App() {
  return (
    <div className="App">
      <CreatePlaylist/>
      <ShowPlaylist/>
      <AddMusicToPlaylist/>
    </div>
  );
}

export default App;
