import { NextFunction, Request, Response} from 'express'
import { get, controller, post} from './decorators'
import { bodyValidator } from './decorators'


@controller('/auth')
class LoginController {

    @get('/login')
    getLogin(req:Request, res:Response):void {
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
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req:Request, res:Response){
        const {email, password} = req.body
    
        if (email && password && email === 'hi@hi.com' && password === 'password') {
            // marked as logged in & redirect to home
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }
}