import Movies_catalog from "../models/Movie.js";
const Query = {
    async getMovies() {
        const movies = await Movies_catalog.find();
        return movies
    }
}

export default Query;