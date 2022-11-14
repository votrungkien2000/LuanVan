const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const scraping = require('../Utils/scraping')
const Hotel = require('../Models/Hotel')


exports.addHotelService = async () => {
    try {
        const data = await scraping();
        data.forEach(async (item, index) => {
            if (index !== 0) {
                const hotel = new Hotel({
                    hotelName: item.hotelName,
                    address: item.address,
                    hotelInfo: item.hotelInfo,
                    price: item.price,
                    point: item.point,
                    picture: item.picture,
                    star: item.star
                });
                console.log(hotel)
                await hotel.save();
            }
        });
        return SuccessHander(200, "Create category success");
    } catch (error) {
        return SuccessHander(200, "Create category success", data);
    }
}
exports.getHotelAllService = async () => {
    try {
        const result = await Hotel.find({})
        console.log(result)
        return SuccessHander(200, "Create category success", result);

    } catch (err) {
        return ErrorHander(500, "Get all faild");
    }
}
