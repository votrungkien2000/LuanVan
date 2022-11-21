const { addHistorySearch, getAllProvinceByMonth, getAllProvinceByYear } = require("../Services/HistorySearchServices")

module.exports = {
    addHistorySearch: async (req, res) => {
        try {
            const idProvince = req.body.idProvince;
            const month = req.body.month;
            const year = req.body.year;
            const result = await addHistorySearch(idProvince, month, year);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                err,
            });
        }
    },
    getAllProvinceByMonth: async (req, res) => {
        try {
            const month = req.query.month;
            const year = req.query.year;
            const result = await getAllProvinceByMonth(month, year);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                err,
            });
        }
    },
    getAllProvinceByYear: async (req, res) => {
        try {
            const year = req.query.year;
            const result = await getAllProvinceByYear(year);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                err,
            });
        }
    },
};

