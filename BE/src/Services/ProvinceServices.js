const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
// const getRoomDetail = require('../Utils/scraping')
const Province = require("../Models/Province");

exports.addProvince = async (province) => {
    const result = new Province({
        nameProvince: province.nameProvince,
    });
    console.log(result)
    await result.save();
    return SuccessHander(200, "Create category success", result);
}