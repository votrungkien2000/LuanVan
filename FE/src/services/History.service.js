const { default: BaseService } = require("./base.service")

class History extends BaseService {

    addHistory = async (idUser, star, price, idHotel) => {
        const result = await this.api.post('/api/addHistory', {idUser, star, price, idHotel});
        return result;
    }
}

export default History;