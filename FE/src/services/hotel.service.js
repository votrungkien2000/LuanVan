const { default: BaseService } = require("./base.service")

class Hotel extends BaseService {

    getHotelAll = async () => {
        const result = await this.api.get('/api/getHotelAll');
        return result;
    }
}

export default Hotel;