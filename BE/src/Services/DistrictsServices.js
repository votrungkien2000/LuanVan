const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const getRoomDetail = require('../Utils/scraping')
const District = require("../Models/District");


exports.add = (list) => {
    list.forEach(async element => {
        const result = new District({
            idProvince: "63478ae6733b3a0f0620ba58",
            nameDistrict: element,
        });
        console.log(result)
        await result.save();
    });
    return SuccessHander(200, "Create category success");
}
exports.getDistricts = async (idProvince) => {
    try {       

       
        const result = await District.find({idProvince: idProvince})
        console.log(idProvince)
        return SuccessHander(200, "Create category success", result);

    } catch (err) {
        return ErrorHander(500,"Get all faild");
    }
}


// exports.scraping = async () => {
//     const result = await getRoomDetail();
//     console.log(result)
//     return SuccessHander(200, "Create category success", result);
// }