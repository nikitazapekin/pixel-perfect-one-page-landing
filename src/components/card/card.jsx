import "./card.css"
import ArrowImg from "../../img/icons/arrow.svg"
const Card = ({img}) => {
    return (
        <div className="card">

            <a href="#!" className="card__link" ></a>
            <img className="card__img" src={img} alt="card" />
            <div className="card__body">
                <div className="card__text">
                    <div className="card__title">
                        Hoodies & Sweetshirt
                    </div>
                    <div className="card__muted">
                        Explore now!
                    </div>
                </div>
                <div className="card__icon">
                    <img src={ArrowImg} alt="arrow" />
                </div>
            </div>
        </div>
    );
}

export default Card;