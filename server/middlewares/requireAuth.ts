import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const requireaAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({message: "No autorizado"})

    const token = authHeader.split(" ")[1]

    if (!token) return res.status(401).json({message: "No autorizado"})

    jwt.verify(token, "jsonwebtokensecret", (err, user) => {
        if (err) return res.status(401).json({message: "No autorizado"})
        req.user = user
        next()  
    })
}