import express, { Application } from 'express';
import dotenv from 'dotenv';
import routes from "./routes/countriesRoutes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

routes(app);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});