import {pool} from '../config/config.js'

const getFruitsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM fruits')
    // console.log(data);
    return data
}

const getFruitByIdDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM fruits WHERE id = ?',[id] )
    return data
}

const insertFruitDb = async(fruit_name,weight,amount)=>{
    let [data] = await pool.query(`
        INSERT INTO fruits (fruit_name,weight,amount)
        VALUES (?,?,?)`,
        [fruit_name,weight,amount] 
    )
}

const deleteFruitDb = async(id)=>{
    await pool.query(`
    DELETE FROM fruits WHERE id = ?`,
    [id]
)
}

const updateFruitDb = async(fruit_name,weight,amount,id)=>{
    await pool.query(`
        UPDATE fruits SET fruit_name = ?,weight =?,amount = ? WHERE id = ?`,[fruit_name,weight,amount,id])
}

const addToCartDb = async(id_fruit,id_user)=>{
    let [data] = await pool.query('INSERT INTO cart (id_fruit,id_user) VALUES (?,?)',[id_fruit,id_user])

}

export {getFruitsDb, getFruitByIdDb, insertFruitDb, deleteFruitDb, updateFruitDb, addToCartDb}