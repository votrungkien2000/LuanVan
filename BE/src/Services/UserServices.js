const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const getRoomDetail = require('../Utils/scraping')
const {CreateToken} = require('../Utils/token/token.js')
const User = require("../Models/User");

exports.add = async (user) => {
    if (user.birthDate === '') {
        user.birthDate = Date()
    }
    const date = new Date(user.birthDate)
    const birthdate = date.setDate(date.getDate() + 1)
    try {
        const result = new User({
            userName: user.userName,
            email: user.email,
            password: user.password,
            birthDate: birthdate,
            numberPhone: user.numberPhone,
            province: user.province,
            district: user.district
        });
        await result.save();
        return SuccessHander(200, "Create category success", result);
    } catch (err) {
        if (err.code == 11000)
            return ErrorHander(400, "Email already exists, please enter email");
        if (err.errors.email) {
            if (err.errors.email.properties.type == "required")
                return ErrorHander(400, err.errors.email.properties.message);
            if (err.errors.email.properties.type == "user defined")
                return ErrorHander(400, err.errors.email.properties.message);
        }
        // Validation userName
        if (err.errors.userName) {
            if (err.errors.userName.properties.type == "required")
                return ErrorHander(400, err.errors.userName.properties.message);
            if (err.errors.userName.properties.type == "minlength")
                return ErrorHander(400, err.errors.userName.properties.message);
            if (err.errors.userName.properties.type == "maxlength")
                return ErrorHander(400, err.errors.userName.properties.message);
        }

        // Validation password
        if (err.errors.password) {
            if (err.errors.password.properties.type == "required")
                return ErrorHander(400, err.errors.password.properties.message);
            if (err.errors.password.properties.type == "minlength")
                return ErrorHander(400, err.errors.password.properties.message);
        }
        // Validation numberPhone
        if (err.errors.numberPhone) {
            if (err.errors.numberPhone.properties.type == "required")
                return ErrorHander(400, err.errors.numberPhone.properties.message);
            if (err.errors.numberPhone.properties.type == "minlength")
                return ErrorHander(400, err.errors.numberPhone.properties.message);
            if (err.errors.numberPhone.properties.type == "maxlength")
                return ErrorHander(400, err.errors.numberPhone.properties.message);
        }
        // Validation province
        if (err.errors.province) {
            if (err.errors.province.properties.type == "required")
                return ErrorHander(400, err.errors.province.properties.message);
        }
        // Validation district
        if (err.errors.district) {
            if (err.errors.district.properties.type == "required")
                return ErrorHander(400, err.errors.district.properties.message);
        }
    }

}

exports.getUser = async (id) => {
    try {
        const result = await User.find({ _id: id })
        .populate({ path: 'province', model: 'Province' })
        .populate({ path: 'district', model: 'District' })
        return SuccessHander(200, "Create category success", result);

    } catch (err) {
        return ErrorHander(500, "Get all faild");
    }
}
exports.login = async (user) => {
    try {
        if (user.email === '') {
            return ErrorHander(400, "Please enter email");
        }
        if (user.password === '') {
            return ErrorHander(400, "Please enter password");
        }
        const result = await User.findOne({ email: user.email })
        if (result === null) {
            return ErrorHander(400, "wrong email");
        }
        if (user.password !== result.password) {
            return ErrorHander(400, "wrong password");
        }
        const createToken = CreateToken({id: result._id})
        return SuccessHander(200, "Create category success", { result, createToken });
    } catch (err) {
        console.log(err)
        return ErrorHander(500, "Get all faild");
    }
}