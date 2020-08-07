"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const path_1 = __importDefault(require("path"));
const pug_1 = __importDefault(require("pug"));
console.log(__dirname, __filename);
const template = pug_1.default.compileFile(path_1.default.resolve(__dirname, '../templates', 'home.pug'));
function HomePage(req) {
    return render({});
}
exports.HomePage = HomePage;
function render(args) {
    return template(args);
}
