import express, { Application } from "express";
import { notFoundRoute, welcomeMessage } from "./utils";

const app: Application = express();
app.use(express.json());


// import all routes here
import productRoutes from "./modules/product/product.route";


// Mount all routes under /api
app.use("/api/products", productRoutes);


// root route message
app.get("/", welcomeMessage);
// not found route
app.use(notFoundRoute);

export default app;