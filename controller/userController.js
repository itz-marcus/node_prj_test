import { getUserDb, getUserByIdDb, insertUserDb, deleteUserDb, updateUserInfoDb} from "../model/userDb.js";
import {hash} from 'bcrypt'

const fetchUser = async(req,res)=>{
    res.json(await getUserDb()) 
}

const fetchUserById = async(req,res)=>{
    res.json(await getUserByIdDb(req.params.id))
}

const insertUser = async(req,res)=>{

    let {cookie} = req.headers
    let splitCookie = cookie.split("=")
    console.log(splitCookie[1]);
        

    let {name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password} = req.body
    let hashedP = await hash(password, 10)
    // console.log(hashedP);
    
    if(hashedP.stack) throw (hashedP)
        // await insertUserDb(name,surname,age,fav_coding_lang,fav_car,eye_colour,username,hashedP)
        res.send(await getUserDb())
        console.log('Data was inserted successfully')
}

const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.send(await getUserDb())
    console.log('Data was delete successfully')
}

const updateUserInfo = async(req,res)=>{
    
    let {name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password} = req.body

    let User = await getUserByIdDb(req.params.id) 

    name ? name=name: name = User.name
    surname ? surname=surname: surname = User.surname
    age ? age=age: age = User.age
    fav_coding_lang ? fav_coding_lang=fav_coding_lang: fav_coding_lang = User.fav_coding_lang
    fav_car ? fav_car=fav_car: fav_car = User.fav_car
    eye_colour ? eye_colour=eye_colour: eye_colour = User.eye_colour
    username ? username=username: username = User.username
    password ? password=password: password = User.password
    await updateUserInfoDb(name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password,req.params.id)
    res.send(await getUserDb())
}
const loginUser = (req,res)=>{
    res.send({
        message:"User logged in Successfully",token:req.body.token
    })
}
export{fetchUser, fetchUserById, insertUser, deleteUser, updateUserInfo,loginUser}