import {NormalPostCreator} from "./normalPostCreator";
import {ErrorLogger} from "./errorLogger";

const tracker = new ErrorLogger();
const normalPost = new NormalPostCreator(tracker);
normalPost.create('', '');