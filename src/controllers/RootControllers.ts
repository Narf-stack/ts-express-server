import { Request, Response, NextFunction} from 'express';
import {get, controller, use} from './decorators'



function requireAuth(req:Request, res:Response, next:NextFunction):void{ // middleware function always return nothing
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403)
    res.send('Not permitted')
}


@controller('')
class RootController{

    @get('/')
    getRoot(req:Request, res:Response){
        if ( req.session && req.session.loggedIn){
            res.send(
                `
                    <div>
                        <div> Logged In ! </div>
                        <a href='/auth/logout'>  Logout ! </a>
                    </div>
                `
            )
        } else {
            res.send(
                `
                    <div>
                        <div> Not Logged In ! </div>
                        <a href='/auth/login'>  Logged In ! </a>
                    </div>
                `
            )
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req:Request, res:Response){
        res.send(
            `
                <div>
                    <div> Welcome to private space ! </div>
                </div>
            `
        )
    }
}