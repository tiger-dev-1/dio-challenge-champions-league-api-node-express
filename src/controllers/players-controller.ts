import { Request, Response } from "express";
import { getPlayersData } from "../services/players-service";


export const getPlayers = async (req: Request, res: Response) => {

    const data = await getPlayersData();
    res.status(200).json(data);

}