import express from "express";

import {
  addSchool,
  listSchools,
  getAllSchools,
} from "../controllers/schoolController.js";

const router = express.Router();

router.post("/addSchool", addSchool);

router.get("/listSchools", listSchools);

router.get("/allSchools", getAllSchools);

export default router;