import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import bodyParser  from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootControllers';
const app = express()

// app.get('/', (req:Request, res:Response)=>{
//     res.send(`
//     <div>
//         <h1> Oye ! </h1>
//     </div>
//     `
//     )
// })
app.use(bodyParser.urlencoded({extended:true})) // attach a body property to the request
app.use(cookieSession({keys:['zhjz']})) // attach a session property to the request
app.use(AppRouter.getInstance())
app.listen(3000,()=>{
    console.log('Listenning on 3000')
})