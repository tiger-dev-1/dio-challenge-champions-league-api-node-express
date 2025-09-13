import { noContent, ok } from "../utils/http-helper";


export const getPlayersData = async () => {

    let response = null
    const data = {
        player: "Cristiano Ronaldo"
    }
    
    if(data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }
    
    return response;
}