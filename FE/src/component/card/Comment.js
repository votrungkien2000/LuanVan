import { useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import 'asset/style/comment.css'
function Comment(props) {
    let color = "#005f00"
    const [img, setImg] = useState(0);
    const handleImg = () => {
        setImg(img + 1);
    }
    console.log(img)
    return (
        <div style={{ padding: "10px" }} className="Comment">
            <div className='Comment__header'>
                <h4>
                    Overall rating
                </h4>
            </div>
            <div className='Comment__box'>
                <div className='Comment__box_pointEvaluation'>
                    <div className='Comment__box_pointEvaluation__value'>
                        <div className='Comment__box_pointEvaluation__value__scores'>
                            <span style={{ fontSize: "1.5rem", backgroundColor: color, borderRadius: "100px", color: "#fff" }}
                                className='Card__info__left__comment__span'>&nbsp;&nbsp;{props.point===''?'Đang đánh giá':props.point}&nbsp;&nbsp;
                            </span>
                        </div>
                    </div>
                    <div className='Comment__box__source'>
                        <div className='Comment__box__source__item'>
                            <a>
                                <strong>Hotel Live</strong>
                                &nbsp;dựa trên &nbsp;
                                <b>571&nbsp;</b>
                                nhận xét từ:
                            </a>
                            <ul>
                                <li>Trivago</li>
                                <li>Hotel.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='Comment__box__rating'>
                    <div className='Comment__box__rating__item' style={{ width: "100%" }}>
                        <ProgressBar className='Comment__box__rating__item__progessBar' style={{ marginBottom: "10px", width: "75%", height: "20px", backgroundColor: "var(--shape)", borderRadius: "8px" }} value={83}></ProgressBar>
                        <div className='Comment__box__rating__item__score'>
                            <strong>Rất tốt</strong>
                            <span>&nbsp;(8.3/10)</span>
                        </div>
                    </div>
                    <div className='Comment__box__rating__item' style={{ width: "100%" }}>
                        <ProgressBar className='Comment__box__rating__item__progessBar' style={{ marginBottom: "10px", width: "75%", height: "20px", backgroundColor: "var(--shape)", borderRadius: "8px" }} value={83}></ProgressBar>
                        <div className='Comment__box__rating__item__score'>
                            <strong>Rất tốt</strong>
                            <span>&nbsp;(8.3/10)</span>
                        </div>
                    </div>
                    <div className='Comment__box__rating__item' style={{ width: "100%" }}>
                        <ProgressBar className='Comment__box__rating__item__progessBar' style={{ marginBottom: "10px", width: "75%", height: "20px", backgroundColor: "var(--shape)", borderRadius: "8px" }} value={83}></ProgressBar>
                        <div className='Comment__box__rating__item__score'>
                            <strong>Rất tốt</strong>
                            <span>&nbsp;(8.3/10)</span>
                        </div>
                    </div>
                    <div className='Comment__box__rating__item' style={{ width: "100%" }}>
                        <ProgressBar className='Comment__box__rating__item__progessBar' style={{ marginBottom: "10px", width: "75%", height: "20px", backgroundColor: "var(--shape)", borderRadius: "8px" }} value={83}></ProgressBar>
                        <div className='Comment__box__rating__item__score'>
                            <strong>Rất tốt</strong>
                            <span>&nbsp;(8.3/10)</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Comment