import { Request, Response } from "express";
import { getPlayersData } from "../services/players-service";
import { ok } from "../utils/http-helper";


export const getPlayers = async (req: Request, res: Response) => {
    const data = await getPlayersData();
    const response = await ok(data);

    res.status(response.statusCode).json(response.body);
}