import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/tasks-route";

dotenv.config()

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use((req, res, next) => {
    console.log('Time: ', Date.now().toString())
    next();
});

app.use('/tasks', router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
