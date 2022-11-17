const { default: BaseService } = require("./base.service")

class Hotel extends BaseService {

    getHotelAll = async () => {
        const result = await this.api.get('/api/getHotelAll');
        return result;
    }
    getHotelBySearch = async (province, district, price) => {
        const result = await this.api.post('/api/getHotelBySearch', { province, district, price });
        return result;
    }
    getHotelBySearchHistory = async (idUser) => {
        const result = await this.api.post('/api/getHotelBySearchHistory', {idUser})
        return result
    }
}

export default Hotel;