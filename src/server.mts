import express from "express";
import indexRouter from "./router/indexRouter.mjs";

const app = express();

app.use(express.json());

app.use(indexRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});