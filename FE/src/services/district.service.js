const { default: BaseService } = require("./base.service")

class DistrictService extends BaseService {

    getDistrict = async (idProvince) => {
        const result = await this.api.get(`/api/districts/getDistricts?idProvince=${idProvince}`);
        return result;
    }

}

export default DistrictService;