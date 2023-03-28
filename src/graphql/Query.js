import Movie from "../models/Movie.js";
import User from "../models/User.js";
const Query = {

    //Movie queries
    async getMovies() {
        const movies = await Movie.find();
        return movies
    },

    //User queries
    async getUser() {
        const users = await User.find()
        return users
    }

}

export default Query;