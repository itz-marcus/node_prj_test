import {pool} from '../config/config.js'

const getUserDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserByIdDb = async(username)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?',[username] )
    return data
}

const insertUserDb = async(name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password)=>{
    let [data] = await pool.query(`
        INSERT INTO users (name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password)
        VALUES (?,?,?,?,?,?,?,?)`,
        [name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password] 
    )
}

const deleteUserDb = async(id)=>{
    await pool.query(`
    DELETE FROM users WHERE id = ?`,
    [id]
)
}

const updateUserInfoDb = async(name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password,id)=>{
    await pool.query(`
        UPDATE users SET name = ?,surname =?,fav_coding_lang = ?,fav_car = ?,eye_colour = ?,username = ?, password = ? WHERE id = ?`,[name,surname,age,fav_coding_lang,fav_car,eye_colour,username,password,id])
}

export {getUserDb, getUserByIdDb, insertUserDb, deleteUserDb, updateUserInfoDb}