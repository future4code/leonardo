export class Musica {
    private nome: string;
    private artista: string;
    private album: string;
    private ano: Date;

    constructor(nome: string, artista: string, album: string, ano: number) {
        this.nome = nome;
        this.artista = artista;
        this.album = album;
        this.ano = new Date(`01/01/${ano}`);
    }

    public tocar() {
        console.log(`Tocando agora ${this.nome}, de ${this.artista}`)

    }

    public setNome(nome: string) {
        if (nome.length < 5) {
            console.log("O nome deve ter mais de 5 caracteres")
        } else {
            this.nome = nome
        }
    }
}
