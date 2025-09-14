import { Router } from "express";
import { addPlayer, deletePlayer, getPlayerById, getPlayers, updatePlayer } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router();

router.get(`/players`, getPlayers);
router.get(`/players/:id`, getPlayerById);

router.post(`/players`, addPlayer);

router.patch(`/players/:id`, updatePlayer);

router.delete(`/players/:id`, deletePlayer);

router.get(`/clubs`, getClubs);


export default router;