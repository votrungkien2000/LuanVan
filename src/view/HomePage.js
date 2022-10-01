import '../asset/style/homePage.css'
import Card from 'component/card/Card';
import { Button } from 'primereact/button';
import { useState } from 'react'
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
function HomePage() {
    const kindRoom = [
        { name: 'Phòng đơn', id: 1 },
        { name: 'Phòng đôi', id: 2 },

    ];
    const province = [
        { name: 'Đồng Tháp', id: 1 },
        { name: 'Cần Thơ', id: 2 },
    ];
    const  District = [
        { name: 'Hồng ngự', id: 1 },
        { name: 'Ninh Kiều', id: 2 },

    ];
    const [price, setPrice] = useState([0, 500]);
    const [loading, setLoading] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const onChangeProvince = (e) => {
        setSelectedProvince(e.value);
    }
    
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const onChangeDistrict = (e) => {
        setSelectedDistrict(e.value);
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
    return (
        <div className='homePage'>
            <div className='homePage__search'>
                <Dropdown
                    value={selectedProvince}
                    options={province}
                    onChange={onChangeProvince}
                    optionLabel="name"
                    placeholder="Province"
                    style={{ marginRight: "5px", backgroundColor: "#fff", height: "45px", width: "150px", color: "black", borderRadius: "8px", marginLeft: "10px" }}
                />
                <Dropdown
                    value={selectedDistrict}
                    options={District}
                    onChange={onChangeDistrict}
                    optionLabel="name"
                    placeholder="District"
                    style={{ marginRight: "5px", backgroundColor: "#fff", height: "45px", width: "150px", color: "black", borderRadius: "8px", marginLeft: "10px" }}
                />
                <Dropdown
                    value={selectedkindRoom}
                    options={kindRoom}
                    onChange={onChangekindRoom}
                    optionLabel="name"
                    placeholder="kindRoom of room"
                    style={{ marginRight: "20px", backgroundColor: "#fff", height: "45px", width: "150px", color: "black", borderRadius: "8px", marginLeft: "10px" }}
                />
                <div style={{ width: "200px", marginRight: "20px" }}>
                    <h5 style={{ fontSize: "1rem" }}>Giá mỗi đêm:[{`${price[0]} $`}, {`${price[1]} $`}]</h5>
                    <Slider min={0} max={500} value={price} onChange={(e) => setPrice(e.value)} range />
                </div>
                <Button style={{border: "1px solid var(--hover)", borderRadius: "8px", height: "45px", backgroundColor:"var(--bs-btn-bg)", fontWeight: "500" }} label="Search" loading={loading} onClick={onLoadingClick} />
            </div>
        <div className='homePage__body'>
            <Card/>
        </div>
        </div>
    )
}
export default HomePage