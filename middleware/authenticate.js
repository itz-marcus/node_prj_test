import { compare } from "bcrypt"
import { getUserByIdDb } from "../model/userDb.js";
import joke from "jsonwebtoken"
import {config} from "dotenv"


const checkUser = async (req,res,next)=>{
    const {username,password} = req.body;
    let hashedPassword = (await getUserByIdDb(username)).password
    console.log(hashedPassword);
    
    let result = await compare(password,hashedPassword)
    if(result == true){
            let token = joke.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            // res.json({token})
            req.body.token = token
            next()
        } else{
            res.send("Password incorrect")
        }
}
const verifyAToken =(req,res,next)=>{
    let {cookie} = req.headers
    //checks if the token exists first
    let token = cookie && cookie.split('=')[1]
    joke.verify(token, process.env.SECRET_KEY,(err,decoded) => {
        if(err){
            res.json({message:'Token has expired'})
            return
    }
    req.body.user = decoded.username
        console.log(decoded);
        
    })
    console.log(token);
    next()
}

export {checkUser, verifyAToken}