import { PlayerModel } from "../models/player-model";
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

export const deletePlayerService = async (id: number) => {

    let response = null;
    const player = await PlayerRepository.deletePlayer(id);

    response = ok(`Player ID: ${id} deleted`);

    return response;
}
    
    // if(id) {
    //     await PlayerRepository.deletePlayer(player);
    //     return created(player);
    // } else {
    //     return badRequest();
    // }

