const express = require("express");
const router = express.Router();
const members = require("../../Members")



//hepsini getir
router.get("/",(req,res) =>{
    //res.send("Anasayfa");
    //res.sendFile(path.join(__dirname , "public","index.html"));
    res.json(members);
})

//isme göre getir
router.get("/:name",(req,res) =>{    
const found = members.some((members) => members.name === req.params.name);
    if (found){
        res.send(members.filter((members) => members.name === req.params.name));
    }else{
        res.status(400).json({msg : `${ req.params.name } Muşteri Bulunamadı`});
    }

})

router.post("/",(req,res) => {
   
   
    members.push(req.body)
    
    
    res.send(members)
})

module.exports = router;