import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Calendar } from 'primereact/calendar';
import 'asset/style/profile.css'


function Profile() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    const [userName, setUserName] = useState("Vo trung kien");
    const [date, setDate] = useState(0);
    const [img, setImg] = useState(null)
    const [numberPhone, setNumberPhone] = useState("123456789");
    const changeImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImg(file)
    }
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
                            sx={{ width: 150, height: 150, marginBottom: "20px" }}/> :
                            <Avatar label="P" className="mr-2"
                            sx={{ width: 150, height: 150, marginBottom: "20px" }}
                            />
                        }
                        <h4>Vo Trung Kien</h4>
                        <div className='profile__info__avatar__upload'>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" onChange={changeImg}/>
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
                                    <label htmlFor="username1" className="block">Username</label>
                                    <InputText id="username1" defaultValue={userName} onChange={(e) => setUserName(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Date of birth</label>
                                    <Calendar id="icon" defa value={date} onChange={(e) => setDate(e.value)} showIcon />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Number Phone</label>
                                    <InputText id="username1" aria-describedby="username1-help" defaultValue={numberPhone} onChange={(e) => setNumberPhone(e.value)} className="block" />
                                </div>
                            </div>
                            <div className='profile__info__content__right'>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Username</label>
                                    <InputText id="username1" defaultValue={userName} onChange={(e) => setUserName(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Username</label>
                                    <InputText id="username1" defaultValue={userName} onChange={(e) => setUserName(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label htmlFor="username1" className="block">Username</label>
                                    <InputText id="username1" defaultValue={userName} onChange={(e) => setUserName(e.value)} aria-describedby="username1-help" className="block " />
                                </div>
                            </div>
                        </div>
                        <div className='profile__info__content__btn'>
                            <Button label="Reset" className="p-button-info" />
                            <Button label="Submit" className='p-button-info1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile