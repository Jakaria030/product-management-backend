import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());


// import all routes here
import productRoutes from "./modules/product/product.route";


// Mount all routes under /api
app.use("/api", productRoutes);


// root api message
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Product Management Backend API"
  });
});

export default app;