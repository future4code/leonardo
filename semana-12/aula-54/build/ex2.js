"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const firstId = process.argv[4];
const secondId = process.argv[5];
const thirdId = process.argv[6];
const doRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const firstResp = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${firstId}`);
        const secondResp = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${secondId}`);
        const thirdEesp = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${thirdId}`);
        console.log('primeiro', firstResp.data.title);
        console.log('segundo', secondResp.data.title);
        console.log('terceiro', thirdEesp.data.title);
    }
    catch (error) {
        console.error(error);
    }
});
doRequest();
//# sourceMappingURL=ex2.js.map