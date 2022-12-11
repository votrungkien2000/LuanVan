const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const History = require("../Models/History");
const Hotels = require("../Models/Hotel");

exports.addHistory = async (idUser, star, price, idHotel) => {
    try {
        const Hotel = await Hotels.find({ _id: idHotel })
        let check = Hotel[0].countSearch
        let count = check + 1
        await Hotels.updateOne({ _id: idHotel }, {
            countSearch: count
        })
        const result = new History({
            idUser: idUser,
            star: star,
            price: price
        });
        await result.save();
    } catch (error) {
        console.log(error)
    }
    return SuccessHander(200, "Create category success");
}