const { use } = require("../Routers/UserRouters");
const { add, getUser, login, updateUser } = require("../Services/UserServices");



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
  getUser: async (req, res) => {
    try {
      const user = req.body;
      const result = await getUser(user.id);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
  login: async (req, res) => {
    try {
      const user = req.body;
      const result = await login(user);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        err,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = req.body.user;
      const id = req.body.id
      const result = await updateUser(user, id);
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

