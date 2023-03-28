import Movie from "../models/Movie.js";
import User from "../models/User.js";
const Query = {

    //Movie queries
    async getMovies() {
        const movies = await Movie.find();
        return movies
    },

    async getMovieByTitle(_, { title }) {
        const searchMovieByTitle = await Movie.find({ title:title });
        console.log('getting Movie: ', searchMovieByTitle);
        return searchMovieByTitle
    },

    //User queries
    async getUser() {
        const users = await User.find()
        return users
    },

    //Login
    async login( _, { email, password }) {
        const verifyUSer = await User.findOne({ email, password }); //[]
        console.log(verifyUSer);

        return verifyUSer
    }

}

export default Query;