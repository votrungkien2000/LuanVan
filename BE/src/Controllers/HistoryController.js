const { use } = require("../Routers/HistoryRouters");
const { addHistory } = require("../Services/HistoryService");



module.exports = {
  addHistory: async (req, res) => {
    try {
      const idUser = req.body.idUser;
      const star = req.body.star;
      const price = req.body.price;
      const result = await addHistory(idUser, star, price);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },

};

