import { Router } from "express";
import db from "../database/createConnection.js";

const router = Router();

router.get("/shop", (req, res) => {
  db.query(`SELECT * FROM wine`, (err, results) => {
    if (err) {
      res.send({ error: "An error has occured on the server" });
    }
    res.send({ data: results });
  });
});

router.post("/purchase", (req, res) => {});

export default router;
