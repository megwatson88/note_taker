let path = require(path);
let router = require('express').Router();


router.get('.notes', function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

router.get('*', function(req, res){
    res.sendFile(path.join(__dir, "public/notes.html"))
});

module.exports = router;