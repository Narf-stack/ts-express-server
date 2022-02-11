import {Router, Request, Response, NextFunction} from 'express'


interface RequestWithBody extends Request {
    body:{[key:string]: string| undefined}

}

function requireAuth(req:Request, res:Response, next:NextFunction):void{ // middleware function always return nothing
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403)
    res.send('Not permitted')
}
const router = Router()




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

router.get('/protected', requireAuth,(req:RequestWithBody, res:Response)=>{
    res.send(
        `
            <div>
                <div> Welcome to private space ! </div>
            </div>
        `
    )
})
export { router }