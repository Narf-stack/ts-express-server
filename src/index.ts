import express, {Request, Response} from 'express';


const app = express()

app.get('/', (req:Request, res:Response)=>{
    res.send(`
    <div>
        <h1> Oye ! </h1>
    </div>
    `
    )
})


app.listen(3000,()=>{
    console.log('Listenning on 3000')
})