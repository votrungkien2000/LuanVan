const { default: BaseService } = require("./base.service")

class ProvinceService extends BaseService {

    getAll = async () => {
        const result = await this.api.get('/api/province/getallprovince');
        return result;
    }

}

export default ProvinceService;