const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const HistorySearch = require("../Models/HistorySearch");
const Province = require("../Models/Province");


exports.addHistorySearch = async (idProvince, month, year) => {
    try {
        if (idProvince !== undefined) {
            const checkIdProvince = await HistorySearch.find({ idProvince: idProvince, year: year })
            let check = null;
            for (item of checkIdProvince) {
                if (item.month === Number(month)) {
                    check = item.searches;
                    console.log(check)
                }
            }
            if (check !== null) {
                let count = check + 1;
                console.log(count)
                await HistorySearch.updateOne({ idProvince: idProvince, month: month, year: year }, {
                    searches: count
                })
                return SuccessHander(200, "Create category success");
            } else {
                let count = 1
                const result = new HistorySearch({
                    idProvince: idProvince,
                    searches: count,
                    month: month,
                    year: year
                });
                await result.save();
                return SuccessHander(200, "Create category success");
            }
        } else {
            return ErrorHander(500, "Create category faile");
        }
    } catch (error) {
        return ErrorHander(500, "server error");
    }
}
exports.getAllProvinceByMonth = async (idProvince, year) => {
    try {
        const result = await HistorySearch.find({ idProvince: idProvince, year: year })
        return SuccessHander(200, "Create category success", result);
    } catch (error) {
        return ErrorHander(500, "server error");
    }
}
exports.getAllProvinceByYear = async (year) => {
    try {
        const result = await HistorySearch.find({ year: year })
        return SuccessHander(200, "Create category success", result);
    } catch (error) {
        return ErrorHander(500, "server error");
    }
}