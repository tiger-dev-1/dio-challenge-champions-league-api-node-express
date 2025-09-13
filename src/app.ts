import express, { Request, Response } from "express";
import { getPlayers } from "./controllers/players-controller";

function createApp() {

    const app = express();

    app.use(express.json());

    app.get("/", getPlayers)

    return app;

}

export default createApp;