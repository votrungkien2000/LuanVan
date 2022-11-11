const cheerio = require("cheerio");
const axios = require("axios");
// const url = "https://www.booking.com/index.vi.html?aid=336510&label=melbourne-biF21fFWLuf31kP48lLVsAS154363258292%3Apl%3Ata%3Ap1%3Ap2260%2C000%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666515%3Akwd-40826943%3Alp9053233%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXL5GV3cgz10NyjSyBn12N8&sid=a9f5c3e68e5e1879fe8b8ee80f3c5b2c&click_from_logo=1";

const getData = async () => {
    try {
        const response = await axios.get("https://www.bestprice.vn/khach-san/vinpearl-resort-spa-ha-long-1344.html")
        const $ = cheerio.load(response.data)
        const getlink = $(".field-item p").text();
        console.log(getlink)
    } catch (error) {
        console.log(error)
    }
}
getData()
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