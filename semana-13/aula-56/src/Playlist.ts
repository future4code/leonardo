import {Musica} from "./Musica";

export class Playlist {
    musicas: Musica[]
    nome: string

    constructor(nome: string) {
        this.nome = nome
        this.musicas = []
    }

    static GetPlaylistFromJSON(playlistJSON: any) {
        const playlistInstance = new Playlist(playlistJSON.nome);
        playlistJSON.musicas.forEach((musica: any) => {
            const musicaInstance = new Musica(musica.nome, musica.artista, musica.album, musica.ano);
            playlistInstance.adicionarMusica(musicaInstance)
        });

        return playlistInstance
    }

    adicionarMusica(musica: Musica) {
        this.musicas.push(musica)
    }

    tocarPlaylist() {
        console.log('Tocando a playlist', this.nome)
        this.musicas.forEach(musica => {
            musica.tocar()
        })
    }
}