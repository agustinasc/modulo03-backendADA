import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import * as userService from "../services/userService.js"


export const registerUser = async (req, res) =>{
    try {
        const { email, password } = req.body

        //para validar
        if(!email || !password){
            return res.status(400).json({ error: "Email y password requeridos"})
        }

        //verificacion
        const existUser = await userService.getUserByEmail(email)
        if(existUser){
            return res.status(400).json({ error: "El usuario ya existe"})
        }

        //Hash
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await userService.createUser({
            email, 
            password: hashedPassword
        })
        res.status(201).json({
            message:"Usuario creado",
            user: newUser
        })
    } catch (error) {
        console.error("ERROR REGISTER:", error);
        res.status(500).json({ error: "Error al registrar usuario"})
    }
}
export const loginUser = async (req, res) =>{
    try {
        const { email, password} = req.body
        const user = await userService.getUserByEmail(email)

        if(!user){
            console.error("ERROR :", error);
            return res.status(400).json({ error: "Credenciales invalidas"})
        }

        //Comparar contraseña
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({ error: "Credenciales invalidas"})
        }

        //Token
        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )
        res.json({
            message: "Login exitoso",
            token
        })
    } catch (error) {
        console.error("ERROR LOGIN:", error);
        res.status(500).json({ error: "Error en login"})
    }
}