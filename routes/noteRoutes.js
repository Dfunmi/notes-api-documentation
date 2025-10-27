import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Endpoints for managing user notes
 */

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all notes for the logged-in user
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched all notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 653b3c29d9f1a4c4d9c8345a
 *                   title:
 *                     type: string
 *                     example: Grocery List
 *                   content:
 *                     type: string
 *                     example: Buy eggs, milk, and bread
 *                   user:
 *                     type: string
 *                     example: 653b3b89d9f1a4c4d9c83459
 *       401:
 *         description: Unauthorized - Token missing or invalid
 */
router.route("/").get(protect, getNotes);

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Meeting Notes
 *               content:
 *                 type: string
 *                 example: Discuss project timeline and deliverables
 *     responses:
 *       201:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *                 user:
 *                   type: string
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 */
router.route("/").post(protect, createNote);

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update a note by ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Note ID
 *         schema:
 *           type: string
 *           example: 653b3c29d9f1a4c4d9c8345a
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Grocery List
 *               content:
 *                 type: string
 *                 example: Buy eggs, milk, bread, and butter
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       400:
 *         description: Invalid ID or request body
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Note not found
 */
router.route("/:id").put(protect, updateNote);

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Note ID
 *         schema:
 *           type: string
 *           example: 653b3c29d9f1a4c4d9c8345a
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Note not found
 */

router.route("/:id").delete(protect, deleteNote);

export default router;
