import { Router } from "express";
import { wineTabel } from "../db.js";
import db from "../database/createConnection.js";

const router = Router();

let wineList = [];

router.get("/shop", (req, res) => {
  db.query(`SELECT * FROM wine`, (err, results) => {
    if (err) {
      res.send({ error: "An error has occured on the server" });
    }
    res.send({ data: results });
  });
});

export default router;
