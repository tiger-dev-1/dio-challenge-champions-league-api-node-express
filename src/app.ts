import express, { Request, Response } from "express";

function createApp() {

    const app = express();

    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
    res.json({player: "beckham"});

    });

    return app;

}

export default createApp;