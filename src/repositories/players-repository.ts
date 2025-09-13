import { PlayerModel } from "../models/player-model";


const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris, Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    age: 33,
    statistics: {
      overall: 93,
      pace: 85,
      shooting: 94,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 65
    }
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    age: 37,
    statistics: {
      overall: 90,
      pace: 88,
      shooting: 95,
      passing: 80,
      dribbling: 88,
      defending: 35,
      physical: 75
    }
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    age: 23,
    statistics: {
      overall: 91,
      pace: 97,
      shooting: 89,
      passing: 81,
      dribbling: 92,
      defending: 32,
      physical: 77
    }
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    age: 31,
    statistics: {
      overall: 91,
      pace: 75,
      shooting: 88,
      passing: 94,
      dribbling: 85,
      defending: 60,
      physical: 76
    }
  },
  {
    id: 5,
    name: "Erling Haaland",
    club: "Borussia Dortmund",
    nationality: "Norway",
    position: "Forward",
    age: 22,
    statistics: {
      overall: 89,
      pace: 89,
      shooting: 93,
      passing: 65,
      dribbling: 75,
      defending: 30,
      physical: 90
    }
  },
  {
    id: 6,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    age: 31,
    statistics: {
      overall: 89,
      pace: 78,
      shooting: 60,
      passing: 70,
      dribbling: 65,
      defending: 92,
      physical: 85
    }
  },
  {
    id: 7,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    age: 30,
    statistics: {
      overall: 90,
      pace: 90,
      shooting: 91,
      passing: 84,
      dribbling: 93,
      defending: 40,
      physical: 70
    }
  },
  {
    id: 8,
    name: "Karim Benzema",
    club: "Real Madrid",
    nationality: "France",
    position: "Forward",
    age: 34,
    statistics: {
      overall: 91,
      pace: 78,
      shooting: 90,
      passing: 85,
      dribbling: 88,
      defending: 40,
      physical: 78
    }
  },
  {
    id: 9,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    age: 37,
    statistics: {
      overall: 89,
      pace: 70,
      shooting: 80,
      passing: 93,
      dribbling: 90,
      defending: 65,
      physical: 68
    }
  },
  {
    "id": 10,
    "name": "Marta Silva",
    "club": "Orlando Pride",
    "nationality": "Brasil",
    "position": "Forward",
    "age": 36,
    "statistics": {
        "overall": 94,
        "pace": 88,
        "shooting": 95,
        "passing": 89,
        "dribbling": 97,
        "defending": 45,
        "physical": 70
        }
  }
];

export const getPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const getPlayerbyId = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

