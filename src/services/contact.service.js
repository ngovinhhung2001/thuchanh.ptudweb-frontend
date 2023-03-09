import createApiClient from "./api.service";

class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create() {
        return (await this.api.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get() {
        return (await this.api.get(`/${id}`)).data;
    }
    async update() {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete() {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactService();