import "./young-favourite.css"
import Pr1 from "../../img/images/promo-01.jpg"
import Pr2 from "../../img/images/promo-02.jpg"
import Arrow from "../../img/icons/arrow.svg"
const YoungFavourite = () => {
    return (
        <section className="young__favourite">
            <div className="container">
                <div className="young__favourite__wrapper">
                    <div className="young__favourite__title">
                        <div className="young__favourite__title__text">
                            Young’s Favourite
                        </div>
                    </div>

                    <div className="young__favourite__cards">
                        <div className="young__favourite__card">
                            <img src={Pr1} alt="card" className="young__favourite__card__image" />
                            <div className="young__favourite__card__content">
                                <div className="young__favourite__card__content_text">
                                    <div className="young__favourite__card__content_title">
                                        Trending on instagram
                                    </div>
                                    <div className="young__favourite__card__content__body">
                                        Explore Now!
                                    </div>

                                </div>
                    <img src={Arrow} alt="arror" className="young__favourite__card__content__arrow" />
                            </div>
                        </div>
                        <div className="young__favourite__card">
                            <img src={Pr2} alt="card" className="young__favourite__card__image" />
                            <div className="young__favourite__card__content">
                                <div className="young__favourite__card__content_text">
                                    <div className="young__favourite__card__content_title">
                                    All Under $40
                                    </div>
                                    <div className="young__favourite__card__content__body">
                                    Explore Now!
                                    </div>
                                </div>
                                <img src={Arrow} alt="arror" className="young__favourite__card__content__arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YoungFavourite;