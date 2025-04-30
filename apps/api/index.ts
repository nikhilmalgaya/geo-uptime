import express from "express";
import { authmiddleware } from "./middleware";

const app = express();

app.post("/api/v1/webstite", authmiddleware, (req, res) => {

   const  userId = req.userId;
    

})







