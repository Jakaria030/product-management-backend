import express, { Application } from "express";
import { globalErrorHandler, notFoundRoute, welcomeMessage } from "./utils";

const app: Application = express();
app.use(express.json());


// import all routes here
import orderRoutes from "./modules/order/order.route";
import productRoutes from "./modules/product/product.route";

// Mount all routes under /api
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);


// root route message
app.get("/", welcomeMessage);
// not found route
app.use(notFoundRoute);
// global error handler
app.use(globalErrorHandler);

export default app;