export class Recipe {
    private title: string
    private description: string
    private creationDate: Date
    private userId: string
    
    
    constructor(title: string, description: string, userId: string, creationDate = new Date()) {
        this.title = title,
        this.description = description,
        this.userId = userId,
        this.creationDate = creationDate
    }

    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public getCreationDate() {
        return this.creationDate
    }
    public getUserId() {
        return this.userId
    }

}