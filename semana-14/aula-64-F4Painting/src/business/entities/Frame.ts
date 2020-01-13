export class Frame {
    private size: FrameSize
    private type: FrameType

    public getSizePrice(): number{
        return 20
    }

    public getTypePrice(): number{
        return 10
    }

    public getTotalPrice(): number{
        return this.getSizePrice() + this.getTypePrice()
    }
}

enum FrameSize {
    "PEQUENA" = 0,
    "MEDIA" = 0,
    "GRANDE" = 0,
}

enum FrameType {
    "Crua" = 0,
    "Lisa" = 0,
    "Clássica" = 0,
    "Vintage" = 0,
    "Madeira" = 0
}