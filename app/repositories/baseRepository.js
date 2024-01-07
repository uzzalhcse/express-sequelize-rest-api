// repositories/baseRepository.js
class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return this.model.create(data);
    }

    async getAll() {
        return this.model.findAll();
    }

    async getById(id) {
        return this.model.findByPk(id);
    }

    async update(id, data) {
        const record = await this.getById(id);
        if (!record) {
            throw new Error(`${this.model.name} not found`);
        }
        return record.update(data);
    }

    async delete(id) {
        const record = await this.getById(id);
        if (!record) {
            throw new Error(`${this.model.name} not found`);
        }
        return record.destroy();
    }
}

module.exports = BaseRepository;
