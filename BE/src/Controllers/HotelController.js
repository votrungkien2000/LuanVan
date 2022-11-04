const {scraping} = require("../Services/HotelService.js");


module.exports = {
  scraping: async (req, res) => {
    try {
      const result = await scraping();
      // console.log(result)
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

