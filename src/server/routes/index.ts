import * as express from "express";
import productRouter from "./productRouter";

const router = express.Router();

/* router.get(
    "/api/hello",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.json("World");
    }
); */

router.get("/test", (req, res, next) => {
    try {
        res.status(200).json({mst: "Hello World!"});
    }catch (error) {
        next(error)
    }
});

router.use("/products", productRouter);

export default router;