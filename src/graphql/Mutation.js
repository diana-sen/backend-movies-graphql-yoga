import Movie from "../models/Movie.js";

const Mutation = {
    //Movies mutations
    async createMovie(_, { title, description, likes, image, releasedDate }) {
        const newMovie = { title, description, likes, image, releasedDate };
        const movie = await Movie.create(newMovie);
        return await Movie.find()
    },
    async updateMovie(_, { _id, title, description, likes, image, releasedDate }) {
        return await Movie.findByIdAndUpdate(_id, { title, description, likes, image, releasedDate }, { new: true })
    },

    async deleteMovie(_, { _id }) {
        const movie = await Movie.findByIdAndDelete(_id);
        if (!movie) {
            throw new Error('Movie not found');
        }
        return await Movie.find();
    },
}

export default Mutation;