import React from 'react'
import axios from 'axios'
import AddMusicToPlaylist from '../AddMusicToPlaylist/AddMusicToPlaylist'

class ShowPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state={
            playlists: [],
            showPlaylist:false,
            currentPlaylistDetails:[],  
            showPlaylistDetails:false
        }
    }
    
    
    getPlaylists = async ()  => {
        const response = await axios.get('https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists' ,
        {headers: {
            auth:'b55e5b6257ecc2bf0920da958f84ebd0'
        }
        })
    
        this.setState({
            playlists:response.data.result.list,
            showPlaylist:true            })
        console.log(this.state.playlists)
    }

   

    deletePlaylist = (playlist) => {
        if(window.confirm(`Tem certeza que deseja excluir a playlist ${playlist.name}?`)){
          axios.delete(
            `https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${playlist.id}`,
            {
              headers: {
                auth:'b55e5b6257ecc2bf0920da958f84ebd0'
              }
            }
          )
    
          .then(r => {
            window.alert(`Playlist deletada com sucesso`)
            this.getPlaylists()
          })
          .catch(error => {
            window.alert(`Ocorreu um erro ao excluir a playlist ${playlist.name}. ${error} `)
          });
        };
      }

    showPlaylistDetails = async (playlist) =>{
        const response = await axios.get(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${playlist.id}` ,
        {
            headers: {
                auth:'b55e5b6257ecc2bf0920da958f84ebd0'
        }
        })
    
        this.setState({
            currentPlaylistDetails:response.data.result.musics,
            showPlaylistDetails:true            })
        console.log(this.state.currentPlaylistDetails) 
        
    }

    

    render(){
        
        let renderPlaylist = this.state.playlists.map((playlist) =>{
            return <div key={playlist.id}>
                    <div onClick={()=> {this.showPlaylistDetails(playlist)}} > {playlist.name} </div>
                        <button onClick={()=> {this.deletePlaylist(playlist)}}>
                            <div> X </div>
                        </button>
                        
                    </div>
        })
        let renderPlaylistDetails = this.state.currentPlaylistDetails.map((music) =>{
            return <div key={music.id}>
                    <div>{music.name}</div>
                    </div>
        })
        return(
            <div>Cique para ver as suas listas
                <button onClick={this.getPlaylists}>exibir</button>
                {renderPlaylist}
                {renderPlaylistDetails}
            </div>
        )
    }
}
export default ShowPlaylist;