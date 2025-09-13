import { Request, Response } from "express";
import { getPlayersData } from "../services/players-service";


export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersData();

        res.status(httpResponse.statusCode).json(httpResponse.body);

}