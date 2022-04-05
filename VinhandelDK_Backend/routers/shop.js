import { Router } from "express";
import { wineTabel } from "../db.js";

const router = Router();

router.get("/shop", (req, res) => {
  res.send({ data: wineTabel });
});

export default router;
