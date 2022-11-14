import 'asset/style/information.css'

function Information(props) {
    return (
        <div style={{ padding: "10px"}} className="infomation">
            <h4>{props.name}</h4>
            <div className="infomation__title">
                <div style={{ padding: "20px",marginBottom:"10px", border: "1px solid var(--shape)", borderRadius: "10px" }}>
                    <p>{props.info}</p>
                </div>
            </div>
            <div className="infomation__service">
                <ul className="infomation__service__list">
                    <li className="infomation__service__list__item">Wi-fi miễn phí</li>
                    <li className="infomation__service__list__item">Đỗ xe miễn phí</li>
                    <li className="infomation__service__list__item">Phù hợp cho người khuyết tật</li>
                    <li className="infomation__service__list__item">Bể bơi</li>
                    <li className="infomation__service__list__item">Có đường ra bãi biển</li>
                </ul>
                <ul className="infomation__service__list">
                    <li className="infomation__service__list__item">Xe đưa đón ra sân bay</li>
                    <li className="infomation__service__list__item">Không hút thuốc</li>
                    <li className="infomation__service__list__item">Chấp nhận vật nuôi</li>
                    <li className="infomation__service__list__item">Thang máy</li>
                    <li className="infomation__service__list__item">Cầu là quần áo</li>
                </ul>
                <ul className="infomation__service__list">
                    <li className="infomation__service__list__item">Xe đưa đón ra sân bay</li>
                    <li className="infomation__service__list__item">Không hút thuốc</li>
                    <li className="infomation__service__list__item">Chấp nhận vật nuôi</li>
                    <li className="infomation__service__list__item">Thang máy</li>
                    <li className="infomation__service__list__item">Cầu là quần áo</li>
                </ul>
            </div>
        </div>
    )
}
export default Information
