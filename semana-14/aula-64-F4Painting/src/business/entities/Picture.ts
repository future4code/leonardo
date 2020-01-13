export class Picture {
    private size: pictureSize
    private type: pictureType

    public getSizePrice(): number {
        if (this.size = pictureSize["13x18"]) {
            return 20
        } else if (this.size = pictureSize["21x30"]) {
            return 27.8
        } else if (this.size = pictureSize["30x30"]) {
            return 35.4
        } else if (this.size = pictureSize["30x42"]) {
            return 42.3
        } else if (this.size = pictureSize["42x60"]) {
            return 55.6
        } else {
            throw new Error("Tamanho da imagem invalido")
        }
    }

    public getTypePrice(): number {
        if (this.type = pictureType["Papel brilhante"]) {
            return 1
        } else if (this.type = pictureType["Papel fosco "]) {
            return 1.05
        } else if (this.type = pictureType["Papel Fibra "]) {
            return 1.12
        } else if (this.type = pictureType["Papel Resinado "]) {
            return 1.42
        } else if (this.type = pictureType["Papel Pérola "]) {
            return 1.53
        } else {
            throw new Error("papel inválido")
        }
    }

    public getTotalPrice(): number{
        const type = this.getTypePrice()
        const size = this.getSizePrice()
        return type + size
    }
}

enum pictureSize {
    "13x18" = "13x18",
    "21x30" = 0,
    "30x30" = 0,
    "30x42" = 0,
    "42x60" = 0
}

enum pictureType {
    "Papel brilhante" = 0,
    "Papel fosco " = 0,
    "Papel Fibra " = 0,
    "Papel Resinado " = 0,
    "Papel Pérola " = 0,
}