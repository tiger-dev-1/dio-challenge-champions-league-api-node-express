import { PlayerModel } from "../models/player-model";


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Cristiano Ronaldo"
    },
    {
        id: 2,
        name: "Marta Silva"
    },
    {
        id: 3,
        name: "Lionel Messi"
    },
];

export const getPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const getPlayerbyId = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

