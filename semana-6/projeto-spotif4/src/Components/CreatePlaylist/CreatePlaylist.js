import React from 'react';
import Axios from 'axios';

class CreatePlaylist extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            inputPlaylistValue:''
        }
    }
    onChangeInputPlaylist = (event) => {
        let newValue = event.target.value
        this.setState({
            inputPlaylistValue:newValue
        })
        console.log(newValue)
    }
    createPlaylist = async  ()  => {
        const data = {
            name: this.state.inputPlaylistValue
        } 
        
        await Axios.post('https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist',
        data, {
            headers: {
                auth: 'b55e5b6257ecc2bf0920da958f84ebd0 '
            }
        })
        this.setState ({inputPlaylistValue:''})
        window.alert(`Playlist ${data.name} criada com sucesso`)

    }

    render(){
        
        return(
            <div>
                Crie sua Playlist
                <input type="text"
                onChange={this.onChangeInputPlaylist}
                value={this.state.inputPlaylistValue}
                />
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        )
    }

}

export default CreatePlaylist;