const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CatsService {
  constructor() {}

  // Get All
  async find() {
    return await models.Cat.findAll({
      order: [
        ['id', 'ASC']
      ],
    });
  }

  // Get By Id
  async findById(id) {
    const item = await models.Cat.findByPk(id);
    if (!item) {
      throw boom.notFound(`Id = ${id}, Not Found`);
    }
    return item;
  }

  // Create
  async create(item) {
    return await models.Cat.create(item);
  }

  // Update
  async update(id, changes) {
    const item = await this.findById(id);
    return await item.update(changes);
  }

  // Delete
  async delete(id) {
    const item = await this.findById(id);
    await item.destroy();
    return { id };
  }
}

module.exports = CatsService;
