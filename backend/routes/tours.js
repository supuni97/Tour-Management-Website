import express from 'express';
import { createTour, deleteTour, getAllTour, getSIngleTour, updateTour } from '../controllers/tourController.js';

const router = express.Router();

//create new tour
router.post("/",createTour);

//update tour
router.put("/:id",updateTour);

//delete tour
router.delete("/:id",deleteTour);

//get single tour
router.get("/:id",getSIngleTour);

//get all tour
router.get("/",getAllTour);


export default router;
