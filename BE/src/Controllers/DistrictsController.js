const { addProvince, add, getDistricts } = require("../Services/DistrictsServices");

module.exports = {
    add: async (req, res) => {

        const list = [
            "Thành phố Phúc Yên",
"Thành phố Vĩnh Yên",
"Huyện Bình Xuyên",
"Huyện Lập Thạch",
"Huyện Sông Lô",
"Huyện Tam Đảo",
"Huyện Tam Dương",
"Huyện Vĩnh Tường",
"Huyện Yên Lạc",
        ]
        const result = await add(list);
        return res.status(200).json(result);
    },
    getDistricts: async (req, res) => {
        try {
            const {idProvince} = req.query;
            const result = await getDistricts(idProvince)
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                err
            })
        }
    }
};

