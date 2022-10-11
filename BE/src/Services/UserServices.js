const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const getRoomDetail = require('../Utils/scraping')
const User = require("../Models/User");


exports.add = async (user) => {
    const result = new User({
        email: user.email,
        password: user.password,
        status: user.status
    });
    console.log(result)
    await result.save();
    return SuccessHander(200, "Create category success", result);
}


exports.scraping = async () => {
    const result = await getRoomDetail();
    console.log(result)
    return SuccessHander(200, "Create category success", result);
}