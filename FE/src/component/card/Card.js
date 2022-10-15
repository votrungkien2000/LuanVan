import Picture from 'asset/image/hotel-gb468be24c_1920.jpg';
import Information from './Infomation';
import ListPicture from './Picture';
import Comment from './Comment';
import { Button } from 'primereact/button';
import 'asset/style/Card.css';
import { useState, useEffect } from 'react';

function Card() {
    let color = "#005f00"
    const [turnOn, setTurnOn] = useState(false)
    const handleInfo = () => {
        if (status !== 1) {
            setStatus(() => 1)
            setTurnOn(true)
        }
        else {
            setTurnOn(() => !turnOn)
        }

    }
    const handleComment = () => {
        if (status !== 3) {
            setStatus(() => 3)
            setTurnOn(true)
        }
        else {
            setTurnOn(!turnOn);
        }
        console.log(status)
    }
    const [status, setStatus] = useState(0)
    const [render, setRender] = useState(null)
    useEffect(() => {
        if (status === 1) {
            setRender(<Information />)
        }
        else if (status === 2) {
            setRender(<ListPicture />)
        }
        else if (status === 3) {
            setRender(<Comment />)
        }
        else {
            setRender(null)
        }
    }, [status]);

    // console.log(status)
    // console.log(turnOn);
    return (
        <div className="Card">
            <div className="Card__container">
                <div style={{ backgroundImage: `url(${Picture})` }} className='Card__container__picture'>
                    {/* <img className='Card__container__picture__img' src={Picture}/> */}
                </div>
                <div className="Card__info">
                    <div className='Card__info__left'>
                        <div className="Card__info__left_nameHL">
                            <h4>Sài gòn Hotel</h4>
                            <div className='Card__info__left__star'>
                                <i style={{ color: "var(--yellow)", marginRight: "5px" }} className='pi pi-star-fill'></i>
                                <i style={{ color: "var(--yellow)", marginRight: "5px" }} className='pi pi-star-fill'></i>
                                <i style={{ color: "var(--yellow)", marginRight: "5px" }} className='pi pi-star-fill'></i>
                                <i style={{ color: "var(--yellow)", marginRight: "5px" }} className='pi pi-star-fill'></i>
                                <i style={{ color: "var(--yellow)", marginRight: "5px" }} className='pi pi-star-fill'></i>
                            </div>
                        </div>
                        <div onClick={handleInfo} style={{ display: "flex", paddingTop: "5px", justifyContent: "space-between" }} className='Card__info__left__distance'>
                            <div style={{ display: "flex" }}>
                                <div className='Card__info__left__distance__box' style={{ display: "flex", marginRight: "20px" }}>
                                    <i style={{ marginRight: "10px", paddingTop: "2px" }} className='pi pi-car'></i>
                                    <p className='Card__info__left__distance__box__p'>From city center: 0.6km</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }} className='Card__info__left__location'>
                                    <div style={{ display: "flex" }}>
                                        <i style={{ marginRight: "5px" }} class="bi bi-geo-alt"></i>
                                        <p >Sài gòn</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <i className='pi pi-angle-down'></i>
                            </div>
                        </div>
                        <div onClick={handleComment} style={{ display: "flex", paddingTop: "5px", justifyContent: "space-between" }} className='Card__info__left__comment'>
                            <div>
                                <span style={{ backgroundColor: color, borderRadius: "10px", color: "#fff" }} className='Card__info__left__comment__span'>&nbsp;&nbsp;7.9&nbsp;&nbsp;</span>
                                <strong>&nbsp;Tốt&nbsp;</strong>
                                <span className='Card__info__left__comment__text'>(1480 comment)</span>
                            </div>
                            <div>
                                <i className='pi pi-angle-down'></i>
                            </div>
                        </div>
                        <div className='Card__info__left__book'>
                            <Button className='Card__info__left__book' style={{ borderRadius: "8px", width: "100%", backgroundColor: "var(--bs-btn-bg)", border: "1px solid var(--hover)", color: "var(--white)", fontWeight: "500" }} label="Book room" />
                        </div>
                    </div>
                    <div className='Card__info__right'>
                        <div className='Card__info__right__promotion'>
                            <div className='Card__info__right__promotion__title'>
                                <div style={{ backgroundColor: "var(--red)", height: "100%", paddingRight: "5px", paddingLeft: "5px", color: "var(--white)" }}>30%</div>
                                <div style={{ marginLeft: "5px", marginRight: "5px", color: "var(--red)" }}>cheaper</div>
                            </div>
                        </div>
                        <div className='Card__info__right__price'>
                            <div className='Card__info__right__price__min' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p>minimum: 100$</p>
                            </div>
                            <div className='Card__info__right__price__max' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p>maximun: 350$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{
                turnOn ?
                    <div className='Card__extend'>
                        <div className='Card__extend__header'>
                            <ul className='Card__extend__header__ul'>
                                <li onClick={() => setStatus(1)} style={{
                                    marginRight: "20px", color: (status === 1 ? "var(--bs-btn-bg)" : ""),
                                    borderBottom: (status === 1 ? "1px solid #43b4f1" : "")
                                }}>information</li>
                                <li onClick={() => setStatus(2)} style={{
                                    marginRight: "20px", color: (status === 2 ? "var(--bs-btn-bg)" : ""),
                                    borderBottom: (status === 2 ? "1px solid #43b4f1" : "")
                                }}>picture</li>
                                <li onClick={() => setStatus(3)} style={{
                                    color: (status === 3 ? "var(--bs-btn-bg)" : ""),
                                    borderBottom: (status === 3 ? "1px solid #43b4f1" : "")
                                }}>comment</li>
                            </ul>
                        </div>
                        <div className='Card__extend__body'>
                            {render}
                        </div>
                    </div> : <div></div>
            }
        </div>
    )
}
export default Card