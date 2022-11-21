const { default: BaseService } = require("./base.service")

class HistorySearchService extends BaseService {

    getAllHistoryProvinceSrearchByMonth = async (idProvince, year) => {
        const result = await this.api.get(`/api/getAllProvinceByMonth?idProvince=${idProvince}&year=${year}`);
        return result;
    }
    addHistorySearch = async (idProvince,month, year) => {
        const result = await this.api.post('/api/addHistorySearch',{idProvince,month, year});
        return result;
    }
}

export default HistorySearchService;