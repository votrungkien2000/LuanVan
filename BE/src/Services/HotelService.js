const ErrorHander = require("../Utils/Notification/ErrorHander");
const SuccessHander = require("../Utils/Notification/SuccessHander");
const scraping = require('../Utils/scraping')


exports.scraping = async () => {
    const data = await scraping();
    // return SuccessHander(200, "Create category success", data);
}