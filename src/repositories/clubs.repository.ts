import { ClubModel } from "../models/club-model";

const database = [
    {
        id: 1,
        name: "Paris Saint-Germain",
    },
]


export const getClubs = async (): Promise<ClubModel[]> => {
    return database;
};