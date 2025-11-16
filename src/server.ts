import app from "./app";
import connectDB from "./config/db";
import config from "./config/env";

connectDB()
  .then(() => {
    // const PORT = config.port || 5000;

    // app.listen(PORT, () => {
    //   console.log(`Server is running on port: ${PORT}`);
    // });
    
   console.log(`Server is running`);
  }).catch((error) => {
    console.log("MongoDB connection failed !! ", error);
  });

