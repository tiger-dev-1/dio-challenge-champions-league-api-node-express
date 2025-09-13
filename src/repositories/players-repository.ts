interface PlayerModel {
    id: number;
    name: string;
}

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Cristiano Ronaldo"
    },
    {
        id: 2,
        name: "Marta Silva"
    },

];

export const getPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const getPlayerbyId = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

