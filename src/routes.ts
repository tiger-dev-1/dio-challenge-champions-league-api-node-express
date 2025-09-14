import { Router } from "express";
import { addPlayer, deletePlayer, getPlayerById, getPlayers, updatePlayer } from "./controllers/players-controller";

const router = Router();

router.get(`/players`, getPlayers);
router.get(`/players/:id`, getPlayerById);

router.post(`/players`, addPlayer);

router.patch(`/players/:id`, updatePlayer);

router.delete(`/players/:id`, deletePlayer);

export default router;