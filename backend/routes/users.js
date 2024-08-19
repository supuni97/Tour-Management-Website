import express from 'express';
import {deleteUser, getAllUser, getSIngleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

//update user
router.put("/:id",updateUser);

//delete user
router.delete("/:id",deleteUser);

//get single user
router.get("/:id",getSIngleUser);

//get all users
router.get("/",getAllUser);

export default router;
