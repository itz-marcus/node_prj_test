import express from 'express'
import { fetchUser, fetchUserById, insertUser, deleteUser, updateUserInfo, loginUser } from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'
const userRouter = express.Router()

userRouter.post('/login',checkUser,loginUser)

userRouter.get('/getData',fetchUser)

userRouter.get('/:id',fetchUserById)

userRouter.post('/insert', insertUser)

userRouter.delete('/:id', deleteUser)

userRouter.patch('/:id', updateUserInfo)

export {userRouter}