export class Post {
    private id: string
    private photo: string
    private description: string
    private type: PostType
    private userId: string
    private creationDate: Date

    constructor(
        id: string,
        photo: string,
        description: string,
        type: PostType,
        userId: string,
        creationDate: Date
    ) {
        this.id = id
        this.photo = photo
        this.description = description
        this.type = type
        this.userId = userId
        this.creationDate = creationDate
    }

    public getPhoto(){
        return this.photo
    }

    public getCreationDate(){
        return this.creationDate
    }

    public getDescription(){
        return this.description
    }
    public getType(){
        return this.type
    }

    public getUserId(){
        return this.userId
    }

    public getId(){
        return this.id
    }

    public static convertPostType(type: string): PostType {
        switch (type) {
            case "evento":
                return PostType.EVENTO;
            case "normal":
                return PostType.NORMAL;
            default:
                throw new Error("Tipo de post inválido");
        }
    }
}

export enum PostType {
    EVENTO="evento",
    NORMAL="normal"
}