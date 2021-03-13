import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
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
                res.sendFile(path.join(__dirname, "../public/index.html"));
            } catch (error) { 
                next(error);
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
            console.log(err);
            res.status(500).json({ name: err.name, msg: err.message })
        }
    );
 


app.listen(config.port, () => 
    console.log(`Server listening on port ${config.port}`)
);

