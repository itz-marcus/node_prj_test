import { getFruitsDb, getFruitByIdDb, insertFruitDb, deleteFruitDb, updateFruitDb, addToCartDb} from "../model/fruitsDb.js";
import { getUserByIdDb } from "../model/userDb.js";


const fetchFruitInfo = async(req,res)=>{
    res.json(await getFruitsDb()) 
}

const fetchFruitById = async(req,res)=>{
    res.json(await getFruitByIdDb(req.params.id)) 
}

const insertFruit = async(req,res)=>{
    let {fruit_name,weight,amount} = req.body
        await insertFruitDb(fruit_name,weight,amount)
        res.send(await getFruitsDb())
        console.log('Data was inserted successfully')
    
}

const deleteFruit = async(req,res)=>{
    await deleteFruitDb(req.params.id)
    res.send(await getFruitsDb())
    console.log('Data was delete successfully')
}

const updateFruit = async(req,res)=>{
    
    let {fruit_name,weight,amount} = req.body

    let Fruit = await getFruitByIdDb(req.params.id) 
    console.log(Fruit.brand);
    
    fruit_name ? fruit_name=fruit_name: fruit_name = Fruit.fruit_name
    weight ? weight=weight: weight = Fruit.weight
    amount ? amount=amount: amount = Fruit.amount
    await updateFruitDb(fruit_name,weight,amount,req.params.id)
    res.send(await getFruitsDb())
}

const addToCart = async(req,res)=>{
    console.log(req.body)
    let {id}= await getUserByIdDb(req.body.user)
    console.log(id);
    
    // await addToCartDb(req.body.id,id)
    res.json({message:"you've added a fruit successfully to your cart"})
}
export{fetchFruitInfo, fetchFruitById, insertFruit, deleteFruit, updateFruit,addToCart}