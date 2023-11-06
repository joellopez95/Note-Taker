//get handle on libs, router files
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//get and post code 
router.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    const notesPath = path.join(__dirname, '../db/db.json');
    const notes = JSON.parse(fs.readFileSync(notesPath, 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
//push new note code
notes.push(newNote);
    fs.writeFileSync(notesPath,JSON.stringify(notes, null, 2));
    res.json(newNote);
});

module.exports = router;