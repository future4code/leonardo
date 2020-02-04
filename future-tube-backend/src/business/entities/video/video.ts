export class Video {
    constructor(
        private id: string,
        private url: string,
        private title: string,
        private description: string,
        private userId : string
    ) {
    }

    public getId(): string {
        return this.id
    }

    public getUserId(): string {
        return this.userId
    }

    public getUrl(): string {
        return this.url
    }

    public getTitle(): string {
        return this.title
    }

    public getDescription(): string {
        return this.description
    }
}