import {PostReader} from "./postReader";
import {JSONFileManager} from "./JSONFileManager";

export class PostReadImp implements PostReader {
    protected file: string = 'posts.json';
    private fileManager: JSONFileManager;

    readPost(): void {
        this.fileManager = new JSONFileManager(this.file);
        console.log(this.fileManager.getJSONContent())
    }

}