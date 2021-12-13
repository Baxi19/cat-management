const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(50);
const breed = Joi.string().min(3).max(100);
const description = Joi.string().min(3).max(256);
const latitude = Joi.number();
const longitude = Joi.number();
const image = Joi.string().uri();

const createCatSchema = Joi.object({
  name: name.required(),
  breed: breed.required(),
  description: description.required(),
  latitude: latitude.required(),
  longitude: longitude.required(),
  image: image.required(),
});

const getCatSchema = Joi.object({
  id: id.required(),
});

const updateCatSchema = Joi.object({
  name: name,
  breed: breed,
  description: description,
  latitude: latitude,
  longitude: longitude,
  image: image,
});

const deleteCatSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCatSchema,
  getCatSchema,
  updateCatSchema,
  deleteCatSchema,
};
