import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
    const token = jwt.sign({
        test: "test"
    }, "jsonwebtokensecret", {
        expiresIn: 60 * 60 * 24
    })

    return res.json({token})
}

export const profileHandler = (req: Request, res: Response) => {
    res.json({
        profile: req.user,
        message: "Profile data"
    })
}

export const test = (req: Request, res: Response) => {
    res.json({"Mensaje": "Test message"})
}