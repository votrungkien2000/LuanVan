const { addProvince } = require("../Services/ProvinceServices");

module.exports = {
  addProvince: async (req, res) => {
    try {
      const province = req.body;
      const result = await addProvince(province);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
};

