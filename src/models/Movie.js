import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
  posterImg: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
