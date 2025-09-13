import { Request, Response } from "express";
import { getPlayersData } from "../services/players-service";
import { ok } from "../utils/http-helper";


export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersData();

        res.status(httpResponse.statusCode).json(httpResponse.body);

}