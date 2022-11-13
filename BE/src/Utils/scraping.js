const cheerio = require("cheerio");
const axios = require("axios");
const listProvinces = [
    "da-lat",
    "ha-noi",
    "hoi-an",
    "ho-chi-minh",
    "hue",
    "con-dao",
    "cat-ba",
    "ninh-binh",
    "moc-chau",
    "quang-binh",
    "ha-giang",
    "buon-ma-thuot",
    "tuy-hoa",
    "phan-thiet",
    "can-tho",
    "vung-tau",
    "ha-nam",
    "thanh-hoa",
    "lang-son",
    "phu-yen",
    "vinh-phuc",
    "binh-thuan",
    "nghe-an",
    "ben-tre",
    "hoa-binh",
    "cao-bang",
    "ha-tinh",
    "quang-ninh",
    "phu-tho",
    "tay-ninh",
    "binh-dinh",
    "hai-phong",
    "ninh-thuan",
    "cua-hoi",
    "mong-cai",
]
const listLinkProvince = []
const listLinkProvincePage = [[]]
const listLinkProvinceItem = []
const infomationHotels = [{}]
function getlink() {
    for (var listProvince of listProvinces) {
        const link = `https://www.bestprice.vn/khach-san/${listProvince}`
        listLinkProvince.push(link);
    }
    return listLinkProvince;
}

const getPage = async () => {
    const linkProvincePages = getlink()
    // for(i =0 ; i<linkProvincePages.length ; i++){
    for (i = 0; i < 2; i++) {
        listLinkProvincePage[i] = new Array();
        listLinkProvincePage[i].push(linkProvincePages[i]);
        const response = await axios.get(linkProvincePages[i])
        const $ = cheerio.load(response.data)
        const getlinkPage = $(".pagination li")
        getlinkPage.each(function () {
            hrefPage = $(this).find("a").attr("href")
            if (hrefPage !== undefined && !listLinkProvincePage[i].includes(hrefPage)) {
                listLinkProvincePage[i].push(hrefPage)
            }
        })
    }
    return listLinkProvincePage
}
const getLinkItem = async () => {
    await getPage()
    try {
        for (i = 0; i < listLinkProvincePage.length; i++) {
            for (j = 0; j < listLinkProvincePage[i].length; j++) {
                const response = await axios.get(listLinkProvincePage[i][j])
                const $ = cheerio.load(response.data)
                const getlink = $(".bpv-list-item.hotel-ids")
                getlink.each(function () {
                    hrefTamp = $(this).find(".item-name a").attr("href");
                    if (hrefTamp !== undefined) {
                        href = `https://www.bestprice.vn${hrefTamp}`
                        getInformationHotel(href)
                        // listLinkProvinceItem.push(href);
                    }

                });
            }
        }
        console.log(listLinkProvinceItem)
        return listLinkProvinceItem
    } catch (error) {
        console.log(error)
    }
}
const getInformationHotel = async (link) => {
    const listService = []
    const response = await axios.get(link)
    const $ = cheerio.load(response.data)
    hotelName = $(".header-name h1").text()
    address = $(".item-address").text()
    picture = $(".item img").attr("src")
    hotelInfo = $("#about_hotel p").text()
    price = $(".hidden-xs .text-price span").text()
    point = $(".review-number span").text()
    // get service
    service = $(".item")
    service.each(function(){
        serviceName = $(this).find(".facilities-name").text()
        // console.log(serviceName)
        if(serviceName!==undefined || serviceName!=='' || serviceName!==null){
            listService.push(serviceName)
        }
    })
    if (picture !== undefined && hotelName !== undefined) {
        infomationHotels.push({ hotelName, address, hotelInfo, price, point, picture, listService })
    }
    console.log(infomationHotels)
    return infomationHotels
}
getLinkItem()
// getInformationHotel()
// getlink()
//  module.exports = getDetail