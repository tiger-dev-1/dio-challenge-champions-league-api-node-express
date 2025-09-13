import * as PlayerRepository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";


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