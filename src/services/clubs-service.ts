import { ok } from "../utils/http-helper";
import * as repository from "../repositories/clubs.repository";


export const getClubsService = async() => {
    const data = await repository.getClubs();

    const response = ok(data);

    return response;
}