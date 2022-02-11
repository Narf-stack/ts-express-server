import express  from 'express';

// Singleton for only one single router for the all project

export class AppRouter{
    // static = variable de class AppRouter.instance
    // private = no code can access to this property outside the class
    private static instance: express.Router

    static getInstance(): express.Router{
        if(!AppRouter.instance){
            AppRouter.instance = express.Router()
        }
        return AppRouter.instance
    }
}
