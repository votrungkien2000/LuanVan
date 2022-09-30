import Picture from 'asset/image/hotel-gb468be24c_1920.jpg'
import 'asset/style/Card.css'
function Card(){
    return (
        <div className="Card">
            <div className="Card__container">
                <div style={{backgroundImage: `url(${Picture})`}} className='Card__container__picture'>
                    {/* <img className='Card__container__picture__img' src={Picture}/> */}
                </div>
            </div>
        </div>
    )
}
export default Card