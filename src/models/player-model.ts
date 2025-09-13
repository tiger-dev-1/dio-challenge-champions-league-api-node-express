export interface PlayerModel {
    id: number,
        name: string,
        club: string,
        nationality: string,
        position: string,
        age: number,
        statistics: {
            overall: number,
            pace: number,
            shooting: number,
            passing: number,
            dribbling: number,
            defending: number,
            physical: number
        }
}