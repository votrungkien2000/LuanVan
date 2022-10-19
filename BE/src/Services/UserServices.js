const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const getRoomDetail = require('../Utils/scraping')
const User = require("../Models/User");

exports.add = async (user) => {
    const date = new Date(user.birthDate)
    const birthdate = date.setDate(date.getDate()+1)
    const result = new User({
        userName: user.userName,
        email: user.email,
        password: user.password,
        birthDate: birthdate,
        numberPhone: user.numberPhone,
        province: user.province,
        district: user.district
    });
    await result.save();
    return SuccessHander(200, "Create category success", result);
}

exports.getUser = async (id) =>{
    try {
        const result = await User.find({_id: id})
        return SuccessHander(200, "Create category success", result);

    } catch (err) {
        return ErrorHander(500,"Get all faild");
    }
}


exports.scraping = async () => {
    const result = await getRoomDetail();
    console.log(result)
    return SuccessHander(200, "Create category success", result);
}