const router = require('express').Router();
const store = require('../db.store');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');


// how do I set up this path?  
//let { notes } = require('db/db.json');

const writeDB = () => {
    fs.writeFileSync(
        path.join(__dirname, 'db/db.json'),
        JSON.stringify({notes},null, 2)
    );
    return notes;
}

//adding notes
router.get('.public/notes.html', function(req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err=> res.status(500).json(err));
});
//posting notes 

router.post('public/notes.html' , function(req, res) {
    store  
        .addNotes(req.body)
        .then((notes)=> res.json(notes))
        .catch(err => res.staus(500).json(err));
});

//delete 

router.delete('public/notes.html', function(req, res) {
    store
    .removeNotes(req.params.id)
    .then(()=> res.json({ok: true }))
    .catch(err => res.status(500).json(err));
});
module.exports = router;