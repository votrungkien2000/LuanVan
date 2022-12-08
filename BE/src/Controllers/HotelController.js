const {addHotelService, getHotelAllService, getHotelBySearchService, getHotelBySearchHistoryService} = require("../Services/HotelService.js");


module.exports = {
  addHotel: async (req, res) => {
    try {
      const result = await addHotelService();
      return res.status(200).json(result);
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
  getHotelAll: async (req, res) => {
    try {
      let PAGE = req.query.page || 1
      const result = await getHotelAllService(PAGE);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
  getHotelBySearch: async (req, res) => {
    try {
      let province = req.body.province
      let district = req.body.district
      let price = req.body.price
      const result = await getHotelBySearchService(province, district, price);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
  getHotelBySearchHistory: async (req, res) => {
    try {
      let idUser = req.body.idUser
      let nameProvince = req.body.nameProvince
      let nameDistrict = req.body.nameDistrict
      const result = await getHotelBySearchHistoryService(idUser, nameProvince, nameDistrict);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
};

