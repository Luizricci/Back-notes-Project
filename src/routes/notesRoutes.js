

const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");


router.get("/notes", notesController.getAllNotes);
router.post("/notes", notesController.createNote);
router.get("/notes/:id", notesController.getNoteById);
router.put("/notes/:id", notesController.updateNote);
router.delete("/notes/:id", notesController.deleteNote);

module.exports = router;
