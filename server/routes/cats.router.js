const express = require('express');
const CatsService = require("../services/cat.service");
const validatorHandler = require("../middlewares/validator.handler");
const { createCatSchema, getCatSchema, updateCatSchema, deleteCatSchema } = require("./../schemas/cat.schema");

const router = express.Router();
const service = new CatsService();

// GET
router.get('/', async (req, res, next) => {
  try {
    res.status(200).json(await service.find());
  } catch (error) {
    next(error);
  }
});

// GET By Id
router.get('/:id',
  validatorHandler(getCatSchema, "params"),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.findById(id);
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
});

// POST
router.post('/',
  validatorHandler(createCatSchema, "body"),
  async (req, res) => {
  const body = req.body;
  const newItem = await service.create(body);
  res.status(201).json(newItem);
});

// PATCH
router.patch('/:id',
  validatorHandler(getCatSchema, "params"),
  validatorHandler(updateCatSchema, "body"),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const item = await service.update(id, body);
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
});


// DELETE
router.delete('/:id',
  validatorHandler(deleteCatSchema, "params"),
  async (req, res) => {
  const { id } = req.params;
  const idItem = await service.delete(id);
  res.status(200).json(idItem);
});

module.exports = router;
