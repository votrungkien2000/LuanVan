const { add, scraping } = require("../Services/UserServices");



module.exports = {
  addUser: async (req, res) => {
    try {
      const user = req.body;
      const result = await add(user);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
  // scraping: async (req, res) => {
  //   try {
      
  //     const result = await scraping();
  //     return res.status(200).json(result);
  //   } catch (err) {
  //     console.log(err)
  //     return res.status(500).json({
  //       message: "Internal Server Error",
  //       err,
  //     });
  //   }
  // },
};
