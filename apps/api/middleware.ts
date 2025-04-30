import type { Response, Request, NextFunction } from "express";


export function authmiddleware(req: Request, res: Response, next: NextFunction) {
    req.userId = "1";
    next();
}
