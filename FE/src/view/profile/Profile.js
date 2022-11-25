import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from 'primereact/button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import User from 'services/user.service'
import moment from 'moment/moment';
import TextField from '@mui/material/TextField';
import 'asset/style/profile.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ProvinceService from 'services/province.service';
import DistrictService from 'services/district.service';
const userService = new User()
const provinceService = new ProvinceService();
const districtService = new DistrictService();

function Profile() {

    const onChangeDate = (e) => {
        setDate(e.target.value)
    }
    function formatInputDate(dateString) {
        let date = new Date(Date.now());
        if (dateString !== '')
            date = new Date(dateString);
        return moment(date).format('YYYY-MM-DD');
    }
    const [userName, setUserName] = useState('');
    const [date, setDate] = useState(null);
    const [img, setImg] = useState(null)
    const [numberPhone, setNumberPhone] = useState('');
    const [selectProvince, setSelectProvince] = useState('');
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([]);
    const [selectDistrict, setSelectDistrict] = useState('');
    const [email, setEmail] = useState('');
    
    const changeImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImg(file)
    }

    const getProvince = async () => {
        try {
            const result = await provinceService.getAllProvince()
            setProvinces(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getDistrict = async (idProvince) => {
        try {
            const result = await districtService.getDistrict(idProvince)
            setDistricts(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeProvince = async (e) => {
        setSelectProvince(e.target.value);
        try {
            const result = await districtService.getDistrict(e.target.value)
            setDistricts(result.data.data)
            setSelectDistrict(result.data.data[0]._id)
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeDistrict = (e) => {
        setSelectDistrict(e.target.value);
    }
    const updateUser = async () => {
        const id = localStorage.getItem("id")
        console.log(id) 
        try {
            const user = {
                userName: userName,
                email: email,
                birthDate: date,
                numberPhone: numberPhone,
                province: selectProvince,
                district: selectDistrict,
            }
            console.log(user)
            console.log(email)
            const result = await userService.updateUser(user, id)
            console.log(result)
        } catch (error) {

        }
    }
    const getAPI = async () => {
        const id = localStorage.getItem('id')
        try {
            const result = await userService.getUserById(id)
            console.log(result)
            setUserName(result.data.data[0].userName)
            setDate(result.data.data[0].birthDate)
            setNumberPhone(result.data.data[0].numberPhone)
            setEmail(result.data.data[0].email)
            setSelectProvince(result.data.data[0].province ? result.data.data[0].province._id : '')
            setSelectDistrict(result.data.data[0].district ? result.data.data[0].district._id : '')
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAPI()
        getProvince()
    }, [])
    useEffect(() => {
        getDistrict(selectProvince)
    }, [selectProvince])
    return (
        <div className="profile">
            <div className='p-fluid grid formgrid profile__info'>
                <div className='profile__info__title'>
                    <h4>Account</h4>
                </div>
                <div className='profile__info__box'>
                    <div className='profile__info__avatar'>
                        {
                            img ? <Avatar src={img.preview} className="mr-2"
                                sx={{ width: 150, height: 150, marginBottom: "20px" }} /> :
                                <Avatar label="P" className="mr-2"
                                    sx={{ width: 150, height: 150, marginBottom: "20px" }}
                                />
                        }
                        <h4>Vo Trung Kien</h4>
                        <div className='profile__info__avatar__upload'>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={changeImg} />
                                <PhotoCamera />
                            </IconButton>
                        </div>
                    </div>
                    <div className='profile__info__content'>
                        <div className='profile__info__content__title'>
                            <h4>Profile</h4>
                            <p>The information can be edited</p>
                        </div>
                        <div className='profile__info__content__right__body'>
                            <div className='profile__info__content__left'>
                                <div className="field col-12 md:col-4">
                                    <TextField className='textField' id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="email" variant="outlined" />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <TextField className='textField' id="outlined-basic" value={userName} onChange={(e) => setUserName(e.target.value)} label="full name" variant="outlined" />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <TextField className='textField' type="date"
                                        value={date ? formatInputDate(date) : formatInputDate('')}
                                        onChange={onChangeDate} showIcon></TextField>
                                </div>

                            </div>
                            <div className='profile__info__content__right'>
                                <div className="field col-12 md:col-4">
                                    <TextField className='textField' id="outlined-basic" value={numberPhone} onChange={(e) => setNumberPhone(e.target.value)} label="number phone" variant="outlined" />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <Select className='select__adress'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectProvince}
                                        label="Province"
                                        onChange={onChangeProvince}
                                    >
                                        {provinces.map((province, index) =>
                                            <MenuItem value={province._id} key={index}>{province.nameProvince}</MenuItem>
                                        )}
                                    </Select>
                                </div>
                                <div className="field col-12 md:col-4">
                                    <Select className='select__adress'
                                        id="demo-simple-select"
                                        value={selectDistrict}
                                        label="District"
                                        onChange={onChangeDistrict}
                                    >
                                        {districts.map((district, index) =>
                                            <MenuItem value={district._id} key={index}>{district.nameDistrict}</MenuItem>
                                        )}
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className='profile__info__content__btn'>
                            <Button style={{ color: "var(--bs-btn-bg)" }} label="Reset" className="p-button-info" />
                            <Button label="Submit" className='p-button-info1' onClick={updateUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile