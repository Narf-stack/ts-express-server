import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import bodyParser  from 'body-parser';


const app = express()

// app.get('/', (req:Request, res:Response)=>{
//     res.send(`
//     <div>
//         <h1> Oye ! </h1>
//     </div>
//     `
//     )
// })
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)
app.listen(3000,()=>{
    console.log('Listenning on 3000')
})