import { Schema, model } from "mongoose";

const moviesSchema = new Schema( {
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    likes: {
        type: Number
    },
    image: {
        type: String
    },
    releasedDate: {
        type: String
    }
},
{
    timestamps: true
} );

export default model('Movie', moviesSchema);