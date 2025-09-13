import { Request, Response } from "express";
import { getPlayersData, getPlayerByIdService } from "../services/players-service";


export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersData();

        res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}