import express, { Application, Request, Response } from "express";

const app: Application = express();

// root api message
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Product Management Backend API"
  });
});

export default app;