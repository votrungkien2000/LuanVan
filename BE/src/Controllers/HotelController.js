const {addHotelService, getHotelAllService} = require("../Services/HotelService.js");


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
      const result = await getHotelAllService();
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

