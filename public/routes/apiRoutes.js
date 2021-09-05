const router = require('express').Router();
const store = require('../db.store');

//adding notes
router.get('.public/notes.html', function(req, res) => {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err=> res.status(500).json(err));
});
//posting notes 

router.post('public/notes.html' , function(req, res) => {
    store  
        .addNotes(req.body)
        .then((notes)=> res.json(notes))
        .catch(err => res.staus(500).json(err));
});

//delete 

router.delete('public/notes.html', function(req, res)=>{
    store
    .removeNotes(req.params.id)
    .then(()=> res.json.({ok: true }))
    .catch(err => res.status(500).json(err));
});
module.exports = router;