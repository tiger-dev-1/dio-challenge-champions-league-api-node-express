import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World 3!");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
