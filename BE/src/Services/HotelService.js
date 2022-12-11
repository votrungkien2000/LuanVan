const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const scraping = require('../Utils/scraping')
const Hotel = require('../Models/Hotel')
const History = require('../Models/History')
const MongoClient = require('mongoose');

const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',

    // Optional depending on the providers
    apiKey: process.env.API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);

exports.addHotelService = async () => {
    try {
        MongoClient.connection.db.dropCollection('hotels')
        const data = await scraping();
        data.forEach(async (item, index) => {
            if (index !== 0) {
                var res = await geocoder.geocode(item.address);
                if (typeof res[0] != "undefined") {
                    item.price = Number(item.price.split('.').reduce((total, num) => { return total + num }))
                    let hotel = new Hotel({
                        hotelName: item.hotelName,
                        address: item.address,
                        hotelInfo: item.hotelInfo,
                        price: item.price,
                        latitude: res[0].latitude,
                        longitude: res[0].longitude,
                        point: item.point,
                        picture: item.picture,
                        star: item.star.includes("_") ? item.star.split("_")[1] : item.star,
                        countSearch: 0
                    });
                    await hotel.save();
                }
            }
        });
        return SuccessHander(200, "Create category success");
    } catch (error) {
        console.log(error)
        return SuccessHander(200, "Create category success", data);
    }
}
exports.getHotelAllService = async (PAGE) => {
    try {
        // let PAGE_SIZE = 10;
        // let start = (PAGE - 1) * PAGE_SIZE;
        // let end = start + PAGE_SIZE;
        // if (PAGE) {
        //     if (PAGE < 1) {
        //         PAGE = 1;
        //     }
        //     PAGE = parseInt(PAGE)
        //     var numberOfSkips = (PAGE - 1) * PAGE_SIZE;
        //     const result = await Hotel.find({})
        //         .skip(numberOfSkips)
        //         .limit(PAGE_SIZE)
        //     return SuccessHander(200, "Create category success", result);

        // } else {
            const result = await Hotel.find({})
            return SuccessHander(200, "Create category success", result);
        // }
    } catch (error) {

        return ErrorHander(500, "Get all faild");
    }
}
exports.getHotelBySearchService = async (province, district, price) => {
    try {
        let listPrice = []
        const result = await Hotel.find({ price: { $ne: '' } })
        for (item of result) {
            if (price[0] <= item.price && item.price <= price[1]) {
                listPrice.push(item)
            }
        }
        if (province !== '' && province !== undefined) {
            const arr = listPrice.filter(item => {
                return item.address.includes(province)
            })
            listPrice = arr
        }
        if (district !== '' && district !== undefined) {
            const arr = listPrice.filter(item => {
                return item.address.includes(district)
            })
            listPrice = arr
        }
        return SuccessHander(200, "Create category success", listPrice);
    } catch (error) {

        return ErrorHander(500, "Get all faild");
    }
}
exports.getHotelBySearchHistoryService = async (idUser, nameProvince, nameDistrict) => {
    try {
        let hotelByHistory = []
        const history = await History.find({ idUser: idUser }).sort({ createdAt: -1 })
        let min = history[0].price - 500000;
        let max = history[0].price + 500000;
        const result = await Hotel.find({})
        result.forEach((item, index) => {
            if (item.star === history[0].star) {
                hotelByHistory.push(item)
            }
            if (history[0].price !== 0) {
                let arr = []
                for (item of hotelByHistory) {
                    if (item.price !== 0) {
                        if (min < item.price < max) {
                            arr.push(item)
                        }
                    }
                }
                hotelByHistory = arr;
            }
        })
        if (nameProvince !== '' && nameProvince !== undefined) {
            const arr = hotelByHistory.filter(item => {
                return item.address.includes(nameProvince)
            })
            console.log(arr)
            hotelByHistory = arr
        }
        if (nameDistrict !== '' && nameDistrict !== undefined) {
            const arr = hotelByHistory.filter(item => {
                return item.address.includes(nameDistrict)
            })
            hotelByHistory = arr
        }
        return SuccessHander(200, "Create category success", hotelByHistory);
    } catch (error) {

        return ErrorHander(500, "Get all faild");
    }
}
exports.getHotelByPopularService = async (nameProvince, nameDistrict) => {
    try {
        let result = []
        if (nameProvince !== '' && nameProvince !== undefined) {
            const Hotels = await Hotel.find({ "address": { "$regex": nameProvince, "$options": "i" }, countSearch: { $ne: 0 } })
                .sort({ countSearch: -1 })
            result = Hotels;
            if (nameDistrict !== '' && nameDistrict !== undefined) {
                let arr = []
                for (var item of Hotels) {
                    if (item.address.includes(nameDistrict)) {
                        arr.push(item)
                    }
                }
                result = arr;
            }
        }
        else {
            const Hotels = await Hotel.find({ countSearch: { $ne: 0 } })
                .sort({ countSearch: -1 })
            result = Hotels;
        }

        return SuccessHander(200, "Create category success", result);
    } catch (error) {
        console.log(error)
        return ErrorHander(500, "Get all faild");
    }
}
exports.getHotelByPositionService = async (latitude, longitude) => {
    try {
        let result= []
        // console.log(latitude, longitude)
        // await geocoder.reverse({ lat: latitude, lon: longitude }, 
        //     async function (err, res) {
        //     city = res[0].administrativeLevels.level1short
        //     dist = res[0].administrativeLevels.level2short
        // });
        const city = 'Cần thơ'
        const dist = 'Ninh Kiều'
        const hotel = await Hotel.find({ "address": { "$regex": city, "$options": "i" } })
        let arr = []
        for (var item of hotel) {
            if (item.address.includes(dist)) {
                arr.push(item)
            }
        }
        result = arr
        return SuccessHander(200, "Create category success", result);
    } catch (error) {
        console.log(error)
        return ErrorHander(500, "Get all faild");
    }
}