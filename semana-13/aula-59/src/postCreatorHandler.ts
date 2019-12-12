import {NormalPostCreator} from "./normalPostCreator";
import {UpperCasePostCreator} from "./upperCasePostCreator";
import {LowerCasePostCreator} from "./lowerCasePostCreator";
import {ErrorLogger} from "./errorLogger";

export class PostCreatorHandler {
    public errorTracker: ErrorLogger;
    protected normal: NormalPostCreator;
    protected upper: UpperCasePostCreator;
    protected lower: LowerCasePostCreator;

    execute(autor: string, text: string): void {
        this.errorTracker = new ErrorLogger();
        if (text.indexOf('&') === 0) {
            this.upper = new UpperCasePostCreator(this.errorTracker);
            this.upper.create(autor, text)
        } else if (text.indexOf('%') === 0) {
            this.lower = new LowerCasePostCreator(this.errorTracker);
            this.lower.create(autor, text)
        } else {
            this.normal = new NormalPostCreator(this.errorTracker);
            this.normal.create(autor, text)
        }
    }

}