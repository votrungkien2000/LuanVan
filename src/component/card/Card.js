import Picture from 'asset/image/hotel-gb468be24c_1920.jpg'
import { Button } from 'primereact/button';
import 'asset/style/Card.css'
function Card() {
    let color ="#62a30f"
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
                            <i style={{ marginRight: "10px", paddingTop: "2px" }} className='pi pi-car'></i>
                            <p>From city center: 0.6km</p>
                        </div>
                        <div className='Card__info__left__comment'> 
                            <span style={{backgroundColor: color, borderRadius:"10px", color: "#fff"}} className='Card__info__left__comment__span'>&nbsp;&nbsp;7.9&nbsp;&nbsp;</span>
                            <strong className=''>&nbsp;Tốt&nbsp;</strong>
                            <span>(1480 nhận xét)</span>
                        </div>
                        {/* <div className='Card__info__left__price'>
                            <p>
                                minimum: 100$ - maximum: 350$</p>
                        </div>
                        <div className='Card__info__left__book'>
                            <Button style={{ borderRadius: "8px", height: "45px", backgroundColor: "var(--bs-btn-bg)", border: "1px solid var(--hover)", fontWeight: "500" }} label="Book room" />
                            <p>Comment</p>
                        </div> */}
                    </div>
                    <div className='Card__info__right'></div>
                </div>
            </div>
        </div>
    )
}
export default Card