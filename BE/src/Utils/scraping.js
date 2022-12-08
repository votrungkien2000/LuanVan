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
    // for (var listProvince of listProvinces) {
    //     const link = `https://www.bestprice.vn/khach-san/${listProvince}`
    //     listLinkProvince.push(link);
    // }
    const arr = listProvinces.map(row => {
        const link = `https://www.bestprice.vn/khach-san/${row}`;
        return link;
    }) 
    console.log(arr) 
    return arr;
}

const getPage = async () => {
    const linkProvincePages = getlink()
    // for(i =0 ; i<linkProvincePages.length ; i++){
    for (i = 0; i < 5; i++) {
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
                        // getInformationHotel(href)
                        listLinkProvinceItem.push(href);
                    }

                });
            }
        }
        // console.log(listLinkProvinceItem)
        return listLinkProvinceItem
    } catch (error) {
        console.log(error)
    }
}
const getInformationHotel = async () => {
    const linkItemHotel = await getLinkItem()
    // console.log(linkItemHotel)
    const listService = []
    let yu = 0
    for(var item of linkItemHotel ){
        const response = await axios.get(item)
        const $ = cheerio.load(response.data)
        hotelName = $(".header-name h1").text()
        address = $(".item-address").text()
        picture = $(".item img").attr("src")
        hotelInfo = $("#about_hotel p").text()
        price = $(".hidden-xs .text-price span").text().split("đ")[0]
        point = $(".review-number span").text().substring(0, 3)
        star = $(".header-addr span").attr("class").split("star-")[1]
        // get service
        service = $(".item .facilities-name").text();
        // console.log(service)
        // await service.each(function(){
        //     serviceName = $(this).find("").text()
        //         if(serviceName!==''){
        //             listService.push(serviceName)
        //         }
        // })
        // let str = String(service);
        // const arr = [];
        // while(str !== ''){
        //     let strArr = str.split("");
        //     const index = strArr.findIndex((ele) => {
        //         return ele === ele.toUpperCase()
        //     })
            
        // }
        if (picture !== undefined && hotelName !== undefined) {
            infomationHotels.push({ hotelName, address, hotelInfo, price, point, picture, star })
        }
    }
    // console.log(infomationHotels)
    return infomationHotels
}

// getInformationHotel()
// getlink()
 module.exports = getInformationHotel