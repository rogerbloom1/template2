import * as express from "express";
import * as db from "../db/queries/products";
//import productRouter from "./productRouter";

const router = express.Router();

router.get(
    "/:id?", 
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let { id } = req.params;
        let data: JSON;
        try {
            
        } catch(error) {
            next(error);
        }
    }
);

export default router;