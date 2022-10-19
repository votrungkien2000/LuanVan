import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Calendar } from 'primereact/calendar';
import User from 'services/user.service'
import 'asset/style/profile.css'
const userService = new User()

function Profile() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    const [userName, setUserName] = useState('');
    const getAPI = async () => {
        try {
            const result = await userService.getUserById('634e5df195d39c906bfde4f9')
            setUserName(result.data.data[0].userName)
            setDate(result.data.data[0].birthDate)
            setNumberPhone(result.data.data[0].numberPhone)
            setProvince(result.data.data[0].province)
            setDistrict(result.data.data[0].district)
            setEmail(result.data.data[0].email)
        } catch (error) {
            console.log(error)
        }
    }
    const onChangeDate = (e) => {
        setDate(e.value)
    }
    const [date, setDate] = useState(null);
    const [img, setImg] = useState(null)
    const [numberPhone, setNumberPhone] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [email, setEmail] = useState('');
    const changeImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImg(file)
    }
    useEffect(() => { getAPI() }, [])
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
                                    <label htmlFor="username1" className="block">Email</label>
                                    <InputText id="username1" defaultValue={email} onChange={(e) => setEmail(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Username</label>
                                    <InputText id="username1" defaultValue={userName} onChange={(e) => setUserName(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Date of birth</label>
                                    <Calendar id="icon"
                                        value={new Date(date)}
                                        onChange={onChangeDate} showIcon
                                    />
                                </div>
                               
                            </div>
                            <div className='profile__info__content__right'>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Province</label>
                                    <InputText id="username1" defaultValue={province} onChange={(e) => setUserName(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Number Phone</label>
                                    <InputText id="username1" aria-describedby="username1-help" value={numberPhone} onChange={(e) => setNumberPhone(e.value)} className="block" />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">District</label>
                                    <InputText id="username1" defaultValue={district} onChange={(e) => setDistrict(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                            </div>
                        </div>
                        <div className='profile__info__content__btn'>
                            <Button style={{ color: "var(--bs-btn-bg)" }} label="Reset" className="p-button-info" />
                            <Button label="Submit" className='p-button-info1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile