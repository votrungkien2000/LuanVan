const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const HistorySearch = require("../Models/HistorySearch");


exports.addHistorySearch = async (idProvince) => {
    // if()
    let count = 1
    const result = new HistorySearch({
        idProvince: idProvince,
        searches: count,
    });
    await result.save();
    return SuccessHander(200, "Create category success");
}