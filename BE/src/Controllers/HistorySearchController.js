const { addHistorySearch } = require("../Services/HistorySearchServices")

module.exports = {
    addHistorySearch: async (req, res) => {
        try {
            const idProvince = req.body.idProvince;
            const result = await addHistorySearch(idProvince);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                err,
            });
        }
    },

};

