const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const History = require("../Models/History");


exports.addHistory = async (idUser, star, price) => {
    // if()
    const result = new History({
        idUser: idUser,
        star: star,
        price: price
    });
    await result.save();
    return SuccessHander(200, "Create category success");
}