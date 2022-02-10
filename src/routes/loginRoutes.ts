import {Router, Request, Response} from 'express'


interface RequestWithBody extends Request {
    body:{[key:string]: string| undefined}

}
const router = Router()


router.get('/login', (req:Request, res:Response)=>{
    res.send(
        `
        <form method='POST'>
            <div>
                <label> Email ! </label>
                <input name='email' />
            </div>
            <div>
                <label> Password ! </label>
                <input name='password' type='password' />
            </div>
            <button> Submit</button>
        </form>
        `
    )
})

router.post('/login', (req:RequestWithBody, res:Response)=>{
    const {email, password} = req.body

    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // marked as logged in & redirect to home
        req.session = { loggedIn: true };
        res.redirect('/');
      } else {
        res.send('Invalid email or password');
      }

})

router.get('/', (req:RequestWithBody, res:Response)=>{
    if ( req.session && req.session.loggedIn){
        res.send(
            `
                <div>
                    <div> Logged In ! </div>
                    <a href='/logout'>  Logout ! </a>
                </div>
            `
        )
    } else {
        res.send(
            `
                <div>
                    <div> Not Logged In ! </div>
                    <a href='/login'>  Logged In ! </a>
                </div>
            `
        )
    }
})


router.get('/logout', (req:RequestWithBody, res:Response)=>{
    req.session = undefined
    res.redirect('/');
})

export { router }