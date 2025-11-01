import { NextFunction, Request, Response } from "express";

export class ApiError extends Error {
  public readonly status: number;
  public readonly success: false = false;

  constructor(status: number = 500, message: string = "Something went wrong!") {
    super(message);
    this.status = status;
  }
};

export class ApiResponse<T> {
  public readonly status: number;
  public readonly success: boolean;
  public readonly message: string;
  public readonly data?: T;

  constructor(status: number, message: string, data?: T){
    this.status = status;
    this.success = status < 400;
    this.message = message;
    this.data = data;
  }
}

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

export const globalErrorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  const success = err.success || false;
  const message = err.message || "Internal server error!";

  return res.status(status).json({ success, message });
};