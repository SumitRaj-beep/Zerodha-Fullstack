//this middleware save the routes and implement authorization 


const jwt= require("jsonwebtoken");


const verifyToken=(req,res,next)=>{
    try{

        const token=req.headers.authorization.split(" ")[1];
        const  decoded=jwt.verify(token,"secretkey");
        req.user=decoded;
   
        next();
    }

    catch(err){
        return res.status(401).json({message:"auth failed"});
    }

    
};


module.exports =verifyToken;