import * as express from "express";
import morgan from "morgan";
import apiRouter from "./routes"
import config from "./config"; 

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.use(
    "*", 
    (
        req: express.Request, 
        res: express.Response, 
        next: express.NextFunction
        ) => {
            try {
                res.sendFile(path.join(__dirname, "../publi/index.html"));
            } catch (error) { 
                next(err);
        }
    }
);

app.use(
    (
        err: Error, 
        req: express.Request, 
        res: express.Response, 
        next: express.NextFunction
        ) => {
            res.status(500).json({ name: err.name, msg: err.message })
        }
    );
 


app.listen(config.port, () => 
    console.log(`Server listening on port ${config.port}`)
);

