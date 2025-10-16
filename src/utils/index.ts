import { Request, Response } from "express";

export const welcomeMessage = (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "Welcome to Product Management Backend API"
  });
};

export const notFoundRoute = (_req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
};