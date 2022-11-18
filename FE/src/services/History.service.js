const { default: BaseService } = require("./base.service")

class History extends BaseService {

    addHistory = async (idUser, star, price) => {
        const result = await this.api.post('/api/addHistory', {idUser, star, price});
        return result;
    }
}

export default History;