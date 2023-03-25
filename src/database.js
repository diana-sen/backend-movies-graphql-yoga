import mongoose from "mongoose"

//conection to db and error handler
export async function connect() {
    try {
    await mongoose.connect("mongodb://127.0.0.1/movies_catalog", {
        useNewUrlParser: true
    } )
        console.log("Database connected!")
    } catch (error) {
        return console.log('Something went wrong!', error)
    }
 }
