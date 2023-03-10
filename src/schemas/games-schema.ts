import Joi from "joi";

export const gamesSchema = Joi.object({
  name_game: Joi.string().required(),
  review: Joi.number().integer().required(),
  genre_id: Joi.number().integer().required(),
});

export const reviewSchema = Joi.object({
  review: Joi.number().integer().required(),
});