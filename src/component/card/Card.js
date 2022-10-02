import Picture from 'asset/image/hotel-gb468be24c_1920.jpg'
import { Button } from 'primereact/button';
import 'asset/style/Card.css'
function Card() {
    let color = "#62a30f"
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
                        <div style={{ paddingTop: "5px" }} className='Card__info__left__distance'>
                            <div style={{ display:"flex", marginRight:"20px"}}>
                                <i style={{ marginRight: "10px", paddingTop: "2px" }} className='pi pi-car'></i>
                                <p>From city center: 0.6km</p>
                            </div>
                            <div className='Card__info__left__location'>
                                <i style={{ marginRight: "5px"}} class="bi bi-geo-alt"></i>
                                <p>Sài gòn</p>
                            </div>
                        </div>
                        <div className='Card__info__left__comment'>
                            <span style={{ backgroundColor: color, borderRadius: "10px", color: "#fff" }} className='Card__info__left__comment__span'>&nbsp;&nbsp;7.9&nbsp;&nbsp;</span>
                            <strong className=''>&nbsp;Tốt&nbsp;</strong>
                            <span>(1480 comment)</span>
                        </div>
                        <div className='Card__info__left__book'>
                            <Button style={{ borderRadius: "8px", height: "40px", width: "100%", backgroundColor: "var(--bs-btn-bg)", border: "1px solid var(--hover)", color: "var(--white)", fontWeight: "500" }} label="Book room" />
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
                            <div className='Card__info__right_price__max' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <p>maximun: 350$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card