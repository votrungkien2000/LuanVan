import '../asset/style/homePage.css'
import Card from 'component/card/Card';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react'
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProvinceService from 'services/province.service';
import DistrictService from 'services/district.service';
import HotelService from 'services/hotel.service';
import HistorySearchService from 'services/HistorySrearch.service';
import GoogleMapReact from 'google-map-react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const provinceService = new ProvinceService();
const districtService = new DistrictService();
const hotelService = new HotelService();
const historySearchService = new HistorySearchService()

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function HomePage() {
    // const [locationDefault, setLocationDefault] = useState({
    //     center: {
    //         // lat: parseFloat(latitude),
    //         // lng: parseFloat(longitude)
    //         lat: '11.9408842',
    //         lng: '108.4336784'
    //     },
    //     zoom: 11
    // });
    const date = new Date();
    const [province, setProvince] = useState([]);
    const [District, setDistrict] = useState([]);
    const [showMap, setShowMap] = useState(false)
    const [disabledDistrict, setdisabledDistrict] = useState(true)
    const [price, setPrice] = useState([500000, 5000000]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectChoose, setSelectChoose] = useState('1')
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [maxPagination, setMaxPagination] = useState(1);
    const [currentPagination, setCurrentPagination] = useState(0);
    const [hotels, setHotels] = useState([]);
    const [positionChooseHotel, setpPositionChooseHotel] = useState({
        latitude: 11.9408842,
        longitude: 108.433678
    });

    const [chooses, setChooses] = useState([
        {
            id: 1,
            name: '----Mặc định----'
        },
        {
            id: 2,
            name: 'Theo gợi ý của chúng tôi'
        },
        {
            id: 3,
            name: 'Sắp xếp theo sao'
        },
        {
            id: 4,
            name: 'Sắp xếp theo giá'
        },
        {
            id: 5,
            name: 'Theo độ phổ biến'
        }

    ])
    const getHotelAll = async () => {
        try {
            const result = await hotelService.getHotelAll()
            setHotels(result.data.data)
            const maxPage = Math.ceil(parseInt(result.data.data.length / 10) + 1);
            setMaxPagination(maxPage)
            setCurrentPagination(1)
        } catch (error) {
            console.log(error)
        }
    }
    const renderHotels = () => {
        let list = []
        if (currentPagination < maxPagination) {
            for (let i = (currentPagination - 1) * 10; i < currentPagination * 10; i++) {
                list.push(hotels[i])
            }
        } else {
            for (let i = (currentPagination - 1) * 10; i < hotels.length; i++) {
                list.push(hotels[i])
            }
        }
        return list
    }
    const handleSortChange = (e) => {
        setSelectChoose(e.target.value)
        if (e.target.value === 1) {
            getHotelAll()
            setSelectedDistrict(null)
            setSelectedProvince(null)
        }
        if (e.target.value === 2) {
            let nameProvince = '';
            let nameDistrict = '';
            for (var item of province) {
                if (selectedProvince === item._id) {
                    nameProvince = item.nameProvince
                }
            }
            for (var item of District) {
                if (selectedDistrict === item._id) {
                    nameDistrict = item.nameDistrict
                }
            }
            getHotelBySearchHistoryUI(localStorage.getItem("id"), nameProvince, nameDistrict)
            // setSelectedProvince(null)
            // setSelectedDistrict(null)
        }
        if (e.target.value === 3) {
            hotels.sort((a, b) =>
                a.star - b.star
            )
        }
        if (e.target.value === 4) {
            hotels.sort((a, b) =>
                a.price - b.price
            )
        }
        if (e.target.value === 5) {
            let nameProvince = '';
            let nameDistrict = '';
            for (var item of province) {
                if (selectedProvince === item._id) {
                    nameProvince = item.nameProvince
                }
            }
            for (var item of District) {
                if (selectedDistrict === item._id) {
                    nameDistrict = item.nameDistrict.split(" ")[1]
                }
            }
            getHotelByPopularUI(nameProvince, nameDistrict)
        }
    }
    const getHotelBySearchHistoryUI = async (id, nameProvince, nameDistrict) => {
        const result = await hotelService.getHotelBySearchHistory(id, nameProvince, nameDistrict)
        setHotels(result.data.data)
        const maxPage = Math.ceil(parseInt(result.data.data.length / 10) + 1);
        setMaxPagination(maxPage)
        setCurrentPagination(1)
    }
    const getHotelByPopularUI = async (nameProvince, nameDistrict) => {
        const result = await hotelService.getHotelByPopular(nameProvince, nameDistrict)
        setHotels(result.data.data)
        const maxPage = Math.ceil(parseInt(result.data.data.length / 10) + 1);
        setMaxPagination(maxPage)
        setCurrentPagination(1)
    }
    const getDistrict = async (idProvince) => {
        try {
            const result = await districtService.getDistrict(idProvince)
            setDistrict(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeProvince = (e) => {
        setSelectedProvince(e.value);
        getDistrict(e.value)
    }
    const onChangeMap = () => {
        setShowMap(!showMap)
    }

    const onChangeDistrict = (e) => {
        setSelectedDistrict(e.value);
    }

    const getAllProvince = async () => {
        try {
            const result = await provinceService.getAllProvince()
            setProvince(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (selectedProvince !== null) {
            setdisabledDistrict(false)
        }
        if (province.length === 0) {
            getAllProvince()
        }
    }, [selectedProvince])
    useEffect(() => {
        getHotelAll()
    }, [])
    const addHistorySearch = async (idProvince, month, year) => {
        await historySearchService.addHistorySearch(idProvince, month, year);
    }
    const handleSearch = async () => {
        try {
            let nameProvince = '';
            let nameDistrict = '';
            for (var item of province) {
                if (selectedProvince === item._id) {
                    nameProvince = item.nameProvince;
                }
            }
            for (var item of District) {
                if (selectedDistrict === item._id) {
                    nameDistrict = item.nameDistrict.substring(item.nameDistrict.indexOf(" ") + 1, item.nameDistrict.length);
                }
            }
            const result = await hotelService.getHotelBySearch(nameProvince, nameDistrict, price)
            if (result.status === 200) {
                const docs = result.data.data;
                setHotels(docs)
                console.log(docs);
                if (docs.length !== 0)
                    setpPositionChooseHotel({
                        latitude: parseFloat(docs[0].latitude),
                        longitude: parseFloat(docs[0].longitude)
                    })
            }
            if (selectedProvince !== null) {
                addHistorySearch(selectedProvince, date.getMonth() + 1, date.getFullYear())
            }
            const maxPage = Math.ceil(parseInt(result.data.data.length / 10) + 1);
            setMaxPagination(maxPage)
            setCurrentPagination(1)
        } catch (error) {
            console.log("Server error")
        }
        setSelectChoose(1)
    }
    const getPositionHotel = (item) => {
        setpPositionChooseHotel({
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude)
        })
    }

    const handleGetPosition = async () => {
        // await clearLocation()
        try {
            navigator.geolocation.getCurrentPosition(async (position) => {
                console.log(position.coords.latitude, position.coords.longitude)
                setpPositionChooseHotel({
                    latitude: 10.0299337,
                    longitude: 105.7684266
                    // latitude: parseFloat(position.coords.latitude),
                    // longitude: parseFloat(position.coords.longitude)
                })
                const result = await hotelService.getHotelByPosition(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude))
                // console.log(result.data.data)
                setHotels(result.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    // const clearLocation = () => {
    //     var id, target, options;

    //     function success(pos) {
    //         var crd = pos.coords;
    //         if (
    //             target.latitude === crd.latitude &&
    //             target.longitude === crd.longitude
    //         ) {
    //             // console.log("Congratulations, you reached the target");
    //             navigator.geolocation.clearWatch(id);
    //         }
    //     }

    //     function error(err) {
    //         console.error("ERROR(" + err.code + "): " + err.message);
    //     }

    //     target = {
    //         latitude: 0,
    //         longitude: 0,
    //     };

    //     options = {
    //         enableHighAccuracy: false,
    //         timeout: 5000,
    //         maximumAge: 0,
    //     };

    //     id = navigator.geolocation.watchPosition(success, error, options);
    // };
    return (
        <div className='homePage'>
            <div className='homePage__search'>
                <div className='homePage__search__box'>
                    <div className='homePage__search__box__dropdown'>
                        <Dropdown
                            className='homePage__search__Dropdown'
                            value={selectedProvince}
                            options={province}
                            onChange={onChangeProvince}
                            optionLabel="nameProvince"
                            optionValue='_id'
                            placeholder="Chọn tỉnh"
                        />
                        <Dropdown
                            className='homePage__search__Dropdown'
                            disabled={disabledDistrict}
                            value={selectedDistrict}
                            options={District}
                            optionValue='_id'
                            onChange={onChangeDistrict}
                            optionLabel="nameDistrict"
                            placeholder="Chọn huyện"
                        />
                    </div>
                    <div className='homePage__search__price'>
                        <div className='homePage__search__price__slider' style={{ width: "200px", marginRight: "20px" }}>
                            <h5 style={{ fontSize: "1rem" }}>[{`${price[0]}đ`}, {`${price[1]}đ`}]</h5>
                            <Slider min={500000} max={5000000} value={price} onChange={(e) => setPrice(e.value)} range />
                        </div>
                        <div className='homePage__search__content'>
                            <Button className='homePage__search__price__btn' style={{ border: "1px solid var(--hover)", borderRadius: "8px", height: "45px", marginRight: "5px", backgroundColor: "var(--bs-btn-bg)", fontWeight: "500" }} label="Tìm kiếm" onClick={handleSearch} />
                            <Button className='homePage__search__price__btn homePage__search__price__btn__localtion' style={{ border: "1px solid var(--hover)", borderRadius: "8px", height: "45px", backgroundColor: "var(--bs-btn-bg)", fontWeight: "500" }} label="Vị trí" onClick={handleGetPosition} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='homePage__body'>
                <div onClick={onChangeMap} className='homePage__body__change'>
                    <p>Show Map</p>
                </div>
                <div className='homePage__body__hotel'
                    style={showMap ? { display: "none" } : {}}>
                    <div className='homePage__body__sort'>
                        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                            <InputLabel id="demo-select-small">Gợi ý</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={selectChoose}
                                label="Sort"
                                onChange={handleSortChange}
                            >
                                {chooses.map((choose, index) =>
                                    <MenuItem key={index} value={choose.id}>{choose.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </div>
                    {hotels.length !== 0 ? renderHotels().map((ele, index) => {
                        return <Card onClick={() => getPositionHotel(ele)} key={index} hotel={ele} />
                    }) : <div><p className='notification'>Dữ liệu không tồn tại</p></div>}
                    <div className='homePage__body__pagination'>
                        <Stack spacing={2}>
                            <Pagination count={maxPagination} page={currentPagination} onChange={(e, value) => {
                                setCurrentPagination(value)
                            }} />
                        </Stack>
                    </div>
                </div>
                <div className={`homePage__body_map ${showMap ? 'homePage__body_map_show' : ''}`}>
                    <div className='homePage__body__map__item'>
                        <div style={{ height: '93vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                center={{
                                    lat: positionChooseHotel.latitude,
                                    lng: positionChooseHotel.longitude
                                }}
                                defaultZoom={11}
                            >
                                {hotels.length !== 0 ? renderHotels().map((item, index) => {
                                    return <AnyReactComponent
                                        key={index}
                                        lat={parseFloat(item.latitude)}
                                        lng={parseFloat(item.longitude)}

                                        text={<svg xmlns="http://www.w3.org/2000/svg" width="30" color="blue" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>}
                                    />
                                }) : <div></div>}
                                <AnyReactComponent
                                    lat={positionChooseHotel.latitude}
                                    lng={positionChooseHotel.longitude}

                                    text={<svg xmlns="http://www.w3.org/2000/svg" width="30" color="red" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>}
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage