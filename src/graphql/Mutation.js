import Movie from "../models/Movie.js";
import User from "../models/User.js"

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

    //User mutations

    async createUser(_, {email, password }){
        const newUser = { email, password}
        const user = await User.create( newUser )
        return await User.find() // puede ser solo user, regresar el usuario.
    },

    async updateUser(_, { _id, email, password } ){
        return await User.findByIdAndUpdate(_id, { email, password }, {new: true})
    },

    async deleteUser( _, {_id}){
        const user = await User.findByIdAndDelete(_id);
        if(!user){
            
         throw new Error('User not found');
        }
        return user


    },

}

export default Mutation;