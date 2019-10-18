import React from 'react'
import axios from 'axios'

class AddMusicToPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSelectedPlaylist:'',
            allPlaylists:[],
            nameValue:'',
            urlValue:'',
            artistValue:''
            
            }
    }
    handlePlaylistSelection = (event) => {
        const selectedValue = event.target.value
        this.setState({currentSelectedPlaylist: selectedValue})
    }

    getPlaylists = async ()  => {
        const response = await axios.get('https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists' ,
        {headers: {
            auth:'b55e5b6257ecc2bf0920da958f84ebd0'
        }
        })
    
        this.setState({
            allPlaylists:response.data.result.list,
                        })
        console.log(this.state.playlists)
    }

    componentDidMount(){
        this.getPlaylists();
    }

    onNameValueChange = (event) => {
        let newValue = event.target.value
        this.setState({
            nameValue:newValue
        })
        console.log(newValue)
    }

    onArtistValueChange = (event) => {
        let newValue = event.target.value
        this.setState({
            artistValue:newValue
        })
        console.log(newValue)
    }

    onUrlValueChange = (event) => {
        let newValue = event.target.value
        this.setState({
            urlValue:newValue
        })
        console.log(newValue)
    }

    addMusicToSelectedPlaylist = async  (playlist)  => {
        console.log(this.state.currentSelectedPlaylist)
        const data = {
            "playlistId": playlist.id, 
            "music": { 
                "name": this.state.nameValue, 
                "artist": this.state.artistValue,
                "url": this.state.urlValue
            }
        }
        
        await axios.post('https://us-central1-spotif4.cloudfunctions.net/api/playlists/addMusicToPlaylist',
        data, {
            headers: {
                auth: 'b55e5b6257ecc2bf0920da958f84ebd0 '
            }
        })
        

    }
    render(){
        return(
            <div>
                <select 
                    onChange={this.handlePlaylistSelection}
                    value={this.state.currentSelectedPlaylist}
                >
                    <option>Escolha a Playlist</option>
                    {this.state.allPlaylists.map((playlist) => {
                        return (
                            <option
                                key={playlist.id}
                                value={playlist.name}
                            >
                            {playlist.name}
                            </option>
                        )
                    })}
                </select>
                <p>Informe os dados da musica:</p>
                <p>Nome</p>
                <input type="text"
                    onChange={this.onNameValueChange}
                    value={this.state.nameValue}
                />
                <p>Artista</p>
                <input type="text"
                    onChange={this.onArtistValueChange}
                    value={this.state.artistValue}
                />
                <p>Url</p>
                <input type="text"
                    onChange={this.onUrlValueChange}
                    value={this.state.urlValue}
                />
                <div><button onClick={()=> {this.addMusicToSelectedPlaylist(this.state.currentSelectedPlaylist)}}>Enviar</button></div>
            </div>
            
        )
    }
}
export default AddMusicToPlaylist;