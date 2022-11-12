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
const listLinkProvinceItem = []
function getlink() {
    for (var listProvince of listProvinces) {
        const link = `https://www.bestprice.vn/khach-san/${listProvince}#startdate=12/11/2022&night=1&ADT=2&CHD=0&INF=0`
        listLinkProvince.push(link);
    }
    return listLinkProvince;
}

const getLinkItem = async () => {
    const linkProvince = getlink()
    try {
        for (var listLinkProvinceTitle of linkProvince) {
            const response = await axios.get(listLinkProvinceTitle).catch(function (error) {})
            const $ = cheerio.load(response.data)
            const getlink = $(".bpv-list-item.hotel-ids")
            getlink.each(function () {
                hrefTamp = $(this).find(".item-name a").attr("href");
                if (hrefTamp !== undefined) {
                    href = `https://www.bestprice.vn${hrefTamp}`
                    listLinkProvinceItem.push(href);
                }
            });
        }
        return listLinkProvinceItem
    } catch (error) {
        console.log(error)
    }
}
getLinkItem()
// const listAdress = []
// const listPage = []
// const linkToHotel = []
// const detailHotels = []


// const getData = async (url) => {
//     try {
//         const response = await axios.get(url)
//         const $ = cheerio.load(response.data)
//         const getlink = $(".bui-carousel__item");
//         getlink.each(function () {
//             href = $(this).find(".popular-destinations-carousel-link").attr("href");
//             if (href !== undefined) {
//                 listAdress.push({ href })
//             }
//         });
//         // for (const Adress of listAdress) {
//         //     await getPage(Adress.href)
//         // }
//         // console.log(listAdress)
//         return listAdress
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getLinkDetail = async () => {
//     try {
//         const listPageHotel = await getPage()
//         for (detailHotelPage of listPageHotel) {
//             const response = await axios.get(detailHotelPage)
//             const $ = cheerio.load(response.data)
//             const getLinkDetail = $(".a826ba81c4")
//             getLinkDetail.each(function () {
//                 href = $(this).find(".a4225678b2 a").attr("href")
//                 linkToHotel.push(href)
//             })
//         }
//         return linkToHotel;
//     } catch (error) {
//         console.log(error)
//     }
// }
// const getDetail = async ()=> {
//         try {
//             const listLink = await getLinkDetail()
//             for(link of listLink){
//                 // console.log(link)
//                 if(link !== undefined) {
//                     const response = await axios.get(link)
//                     const $ = cheerio.load(response.data)
//                     const hotel = $(".d2fee87262.pp-header__title")
//                     console.log(hotel)
//                     // hotel.each(function(){
//                     //     nameHotel = $(this).find(".page-section .d2fee87262").text()
//                     //     console.log(nameHotel)
//                     // })
//                 }
//             }
//             return listLink
//         } catch (error) {
//             console.log(error)
//         }
// }
// const getPage = async () => {
//     try {
//         const linkPage = await getData(url)
//         for (Data of linkPage) {
//             const response = await axios.get(Data.href)
//             const $ = cheerio.load(response.data)
//             // console.log(typeof parseInt($(".a8b500abde").children("li").last().children("button").text()))
//             for (let i = 1; i <= 2; i++) {
//                 let nextPage = Data.href + `offset=${25 * i - 25}`;
//                 listPage.push(nextPage)
//             }
//             return listPage
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = getDetail