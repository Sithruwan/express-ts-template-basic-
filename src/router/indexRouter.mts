import {Router,Request,Response} from "express";

const indexRouter = Router();

indexRouter.get("/", (req:Request, res:Response) => {
    res.send("hello express ts");
});



export default indexRouter;