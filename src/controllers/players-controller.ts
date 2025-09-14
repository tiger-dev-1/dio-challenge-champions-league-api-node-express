import { Request, Response } from "express";
import { getPlayersData, getPlayerByIdService, addPlayerService, deletePlayerService, updatePlayerService } from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayers = async (req: Request, res: Response) => {
    const httpResponse = await getPlayersData();

        res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const addPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await addPlayerService(bodyValue);

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
    // else {
    //     const response = await noContent();
    //     res.status(response.statusCode).json(response.body)
    // }
    
}

export const updatePlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}

export const deletePlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);

}
