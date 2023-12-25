import User from "../modals/user.modals.js";
import bcryptjs from "bcryptjs";
// import { errorHandler } from "../utils/error.js";


export const signup  = async (req, res, next) => {
 const {username, email, password} = req.body;
 const hashedPassword = bcryptjs.hashSync(password, 18);
 const newUser = new User({username, email , password:hashedPassword});
try{
    await newUser.save();
    res.status(201).json({message:"User created successfully"});

} catch (error){
    next(error);
}
};