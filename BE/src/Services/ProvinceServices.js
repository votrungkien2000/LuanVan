const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
// const getRoomDetail = require('../Utils/scraping')
const Province = require("../Models/Province");

exports.addProvince = async (province) => {
    console.log(province)
    const result = new Province({
        nameProvince: province
    });

    await result.save();
    return SuccessHander(200, "Create category success", result);
}


exports.add = async (list) => {
    list.forEach(async element => {
        let result = new Province({
            nameProvince: element
        });
        await result.save();
    });

    return SuccessHander(200, "Create category success");
}
exports.getAllProvince = async () => {
    try {
        const result = await Province.find({})
        console.log(result)
        return SuccessHander(200, "Create category success", result);

    } catch (err) {
        return ErrorHander(500,"Get all faild");
    }
}

