import { Request, Response } from "express";


export const getPlayers =  (req: Request, res: Response) => {
    res.json({player: "Ronaldinho Gaúcho"})
}