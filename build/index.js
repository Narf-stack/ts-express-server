"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
// app.get('/', (req:Request, res:Response)=>{
//     res.send(`
//     <div>
//         <h1> Oye ! </h1>
//     </div>
//     `
//     )
// })
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.listen(3000, function () {
    console.log('Listenning on 3000');
});
