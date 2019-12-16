import {PostCreator} from "./postCreator";
import {Post} from "./post";
import {JSONFileManager} from "./JSONFileManager";
import * as moment from "moment";
import {ErrorPrinter} from "./errorPrinter";
import {ErrorTracker} from "./errorTracker";


export class LowerCasePostCreator implements PostCreator {
    public date = moment();
    protected fileManager: JSONFileManager;
    protected file: string = 'posts.json';
    private errorPrinter: ErrorPrinter;

    constructor(
        public errorTracker: ErrorTracker
    ) {
        this.fileManager = new JSONFileManager(this.file)

    }

    create(autor: string, text: string): void {
        if (!autor || autor === '' || !text || text === '') {
            this.errorPrinter = new ErrorPrinter();
            this.errorPrinter.onError('verifique o autor ou o texto', this.date)
        } else {
            const post = new Post(autor, text.toLowerCase().substr(1), this.date.format('DD/MM/YYYY, hh[h] mm[min]',));
            this.fileManager.saveToJSON(post)
        }
    }
}