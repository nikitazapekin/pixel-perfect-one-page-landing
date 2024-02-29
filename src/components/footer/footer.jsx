import "./footer.css"
import Facebook from "../../img/socials/fb.svg"
import Inst from "../../img/socials/inst.svg"
import Tw from "../../img/socials/tw.svg"
import In from "../../img/socials/in.svg"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social__networks">
                    <div className="footer__social__networks__title">
                        FASHION
                    </div>
                    <div className="footer__social__networks__about">
                        Complete your style with awesome clothes from us.
                    </div>
                    <div className="footer__social__networks__list">
                        <div className="social__network__image__wrapper">
                            <img className="social__network__image" alt="logo" src={Facebook} />
                        </div>
                        <div className="social__network__image__wrapper">
                            <img className="social__network__image" alt="logo" src={Inst} />
                        </div>
                        <div className="social__network__image__wrapper">
                            <img className="social__network__image" alt="logo" src={Tw} />
                        </div>
                        <div className="social__network__image__wrapper">
                            <img className="social__network__image" alt="logo" src={In} />
                        </div>
                    </div>
                </div>
                <div className="footer__navigation">
                    <div className="footer__navigation__column">
                        <div className="footer__navigation__title">
                            Company
                        </div>
                        <div className="footer__navigation__about">

                            About
                        </div>
                        <div className="footer__navigation__about">
                            Contact us
                        </div>

                        <div className="footer__navigation__about">
                            Support
                        </div>
                        <div className="footer__navigation__about">
                            Careers
                        </div>
                    </div>



                    <div className="footer__navigation__column">
                        <div className="footer__navigation__title">
                        Quick Link
                           
                        </div>
                        <div className="footer__navigation__about">

                         Share Location
                        </div>
                        <div className="footer__navigation__about">
                        Orders Tracking
                        </div>

                        <div className="footer__navigation__about">
                          Size Guide
                        </div>
                        <div className="footer__navigation__about">
                          FAQs
                        </div>
                    </div>


                    
                    <div className="footer__navigation__column">
                        <div className="footer__navigation__title">
                                              Legal
                           
                        </div>
                        <div className="footer__navigation__about">

                                              Terms & conditions
                        </div>
                        <div className="footer__navigation__about">
                                          Privacy Policy
                        </div>

                    
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

 