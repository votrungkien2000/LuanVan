const { default: BaseService } = require("./base.service")

class Hotel extends BaseService {
    addHotels = async () => {
        const result = await this.api.get('/api/addHotel');
        return result;
    }
    getHotelAll = async () => {
        const result = await this.api.get('/api/getHotelAll');
        return result;
    }
    getHotelBySearch = async (province, district, price) => {
        const result = await this.api.post('/api/getHotelBySearch', { province, district, price });
        return result;
    }
    getHotelBySearchHistory = async (idUser, nameProvince, nameDistrict) => {
        const result = await this.api.post('/api/getHotelBySearchHistory', {idUser, nameProvince, nameDistrict})
        return result
    }
    getHotelByPopular = async (nameProvince, nameDistrict) => {
        const result = await this.api.post('/api/getHotelByPopular', {nameProvince, nameDistrict})
        return result
    }
    getHotelByPosition = async (latitude, longitude) => {
        const result = await this.api.post('/api/getHotelByPosition', {latitude, longitude})
        return result
    }
}

export default Hotel;