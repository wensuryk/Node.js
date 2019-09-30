const express = require('express');
const router = express();
const path = require('path');
router.get("/howitworks",(req,res) =>{
    res.sendFile(path.join(__dirname, "../" ,"views", "hiw.html"));
})
module.exports = router;