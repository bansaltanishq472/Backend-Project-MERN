// require('dotenv').config({path: './env'}) // problem due to code consistency (require and import problem)
import dotenv from "dotenv"
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import  connectDB  from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB();






// import express from "express"
// const app = express()

//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//             // Listners
//             app.on("error", (error) => {
//                 console.log("ERRR: ", error);
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log(`App is listening on port ${process.env.PORT}`);
//             })
//         } catch (error) {
//             console.log("ERROR: ", error);
//             throw error
//         }
// })()