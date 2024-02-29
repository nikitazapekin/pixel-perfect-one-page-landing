import "./payday-sail.css"
import  PromoImage from "../../img/images/promo-img.jpg"
const PayDaySail = () => {
    return (
        <section className="payday__sail">
<img src={PromoImage} alt="promo" className="payday__sail__image" />

<div className="payday__sail__text__block">
    <div className="payday__sail__text_title">
<div className="payday__sail__payday">

Payday 
</div>



   <div className="payday__sail__sale__now">

    sale now
   </div>
{/*
    <span>
    </span>
    <span>
        </span>
    <span>
        <span>
        </span>
    </span >
    */}
    </div>

    <div className="payday__sail__next__purchase">
    Spend minimal $100 get 30% off
voucher code for your next purchase
    </div>

    <div className="payday__sail__date">
    1 June - 10 June 2021
    </div>

    <div className="payday__sail__condition">
    *Terms & Conditions apply
    </div>
    <div className="payday__sail__shop_now">
         Shop now
       {/*<a href="#!" className="payday__sail__shop__link">
        
</a> */}
    </div>
</div>
        </section>
      );
}
 
export default PayDaySail;