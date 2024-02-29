
import Vourchers from "../../img/images/vouchers-img.png"
import GoogleImage from "../../img/icons/google-play.png"
import AppleImage from "../../img/icons/app-store.png"
import "./download.css"
const Download = () => {
    return (
        <div className="download">
            <div className="container__download">
                <div className="download__wrapper">
                <div className="download__block">
                    <div className="download__block__title">
                        <span>

                        DOWNLOAD APP &
                        </span>
<span>
                     GET THE VOUCHER!
</span>
                     
                     </div>
                    <div className="download__block__about">Get 30% off for first transaction using Rondovision mobile app for now.</div>
                    <div className="download__block__images">
                        <img src={AppleImage} alt="apple" className="download__block__image" />
                        <img src={GoogleImage} alt="google" className="download__block__image" />
                    </div>
                </div>
                <img src={Vourchers} alt="telephone" className="download__telephone" />
                </div>
            </div>
        </div>
    );
}

export default Download;