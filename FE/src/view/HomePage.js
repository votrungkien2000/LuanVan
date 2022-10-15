import '../asset/style/homePage.css'
import Card from 'component/card/Card';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react'
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import ProvinceService from 'services/province.service';
import DistrictService from 'services/district.service';

const provinceService = new ProvinceService();
const districtService = new DistrictService();

function HomePage() {
    const kindRoom = [
        { name: 'Phòng đơn', id: 1 },
        { name: 'Phòng đôi', id: 2 },

    ];
    const [province, setProvince] = useState([]);
    const [District, setDistrict] = useState([]);
    const [disabledDistrict, setdisabledDistrict] = useState(true)
    const [price, setPrice] = useState([0, 500]);
    const [loading, setLoading] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const getDistrict = async (idProvince) => {
        try {
            const result = await districtService.getDistrict(idProvince)
            console.log(result)
            setDistrict(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeProvince = (e) => {
        setSelectedProvince(e.value);
        getDistrict(e.value)
    }

    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const onChangeDistrict = (e) => {
        setSelectedDistrict(e.value);
        console.log(e.value)
    }
    const [selectedkindRoom, setSelectedkindRoom] = useState(null);
    const onChangekindRoom = (e) => {
        setSelectedkindRoom(e.value);
    }

    const onLoadingClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    const getAll = async () => {
        try {
            const result = await provinceService.getAll()
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
            getAll()
        }
    }, [selectedProvince])
    return (
        <div className='homePage'>
            <div className='homePage__search'>
                <div className='homePage__search__box'>
                    <Dropdown
                        className='homePage__search__Dropdown'
                        value={selectedProvince}
                        options={province}
                        onChange={onChangeProvince}
                        optionLabel="nameProvince"
                        optionValue='_id'
                        placeholder="Province"
                    // style={{ marginRight: "5px", backgroundColor: "#fff", height: "45px", width: "150px", color: "black", borderRadius: "8px", marginLeft: "10px" }}
                    />
                    <Dropdown
                        className='homePage__search__Dropdown'
                        disabled={disabledDistrict}
                        value={selectedDistrict}
                        options={District}
                        optionValue='_id'
                        onChange={onChangeDistrict}
                        optionLabel="nameDistrict"
                        placeholder="District"
                    // style={{ marginRight: "5px", backgroundColor: "#fff", height: "45px", minWidth: "150px", width: "auto", color: "black", borderRadius: "8px", marginLeft: "10px" }}
                    />
                    <Dropdown
                        className='homePage__search__Dropdown'
                        value={selectedkindRoom}
                        options={kindRoom}
                        onChange={onChangekindRoom}
                        optionLabel="name"
                        placeholder="kindRoom"
                    // style={{ marginRight: "20px", backgroundColor: "#fff", height: "45px", width: "150px", color: "black", borderRadius: "8px", marginLeft: "10px" }}
                    />
                    <div className='homePage__search__price'>
                        <div className='homePage__search__price__slider' style={{ width: "200px", marginRight: "20px" }}>
                            <h5 style={{ fontSize: "1rem" }}>Giá mỗi đêm:[{`${price[0]} $`}, {`${price[1]} $`}]</h5>
                            <Slider min={0} max={500} value={price} onChange={(e) => setPrice(e.value)} range />
                        </div>
                        <Button className='homePage__search__price__btn' style={{ border: "1px solid var(--hover)", borderRadius: "8px", height: "45px", backgroundColor: "var(--bs-btn-bg)", fontWeight: "500" }} label="Search" onClick={onLoadingClick} />
                    </div>
                </div>

            </div>
            <div className='homePage__body'>
                <div className='homePage__body__hotel'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='homePage__body_map'>
                    <div className='homePage__body__map__item'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.9374710560477!2d105.77025033856712!3d10.029822370357065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2sbg!4v1664703943834!5m2!1svi!2sbg" width="100%" height="100%" style={{ border: "1px soild var(--hover)", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage