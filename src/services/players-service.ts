import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";


export const getPlayersData = async () => {

    let response = null
    const data = await PlayerRepository.getPlayers();
    
    if(data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }
    
    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.getPlayerbyId(id);
    let response = null;

    if(data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}

export const addPlayerService = async (player: PlayerModel) => {
    
    if(Object.keys(player).length !== 0) {
        await PlayerRepository.addPlayer(player);
        return created(player);
    } else {
        return badRequest();
    }

}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {

    let response = null;

     response = await PlayerRepository.updatePlayer(id, statistics);

    if (Object.keys(response).length === 0  ) {
        return badRequest();
    }

    return ok(response);
}

export const deletePlayerService = async (id: number) => {

    let response = null;
    const isDeleted = await PlayerRepository.deletePlayer(id);

    if (!isDeleted) {
        return badRequest();
    }

    await PlayerRepository.deletePlayer(id);

    response = ok(`Player ID: ${id} deleted`);

    return response;
}
    
    // if(id) {
    //     await PlayerRepository.deletePlayer(player);
    //     return created(player);
    // } else {
    //     return badRequest();
    // }

