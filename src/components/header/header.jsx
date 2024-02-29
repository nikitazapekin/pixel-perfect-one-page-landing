import Logo from "../../img/icons/logo.svg"
import "./header.css"
const Header = () => {
    return ( 
     <header className="header">
<div className="container">
    <div className="header__row">

        <div className="header__logo">
           <img src={Logo} alt="logo" />
           <span>
            Fashion
           </span>
        </div>

        <nav className="header__nav">
       <ul>
<li> <a href="#!">CATALOGUE</a></li>
<li> <a href="#!">FASHION</a></li>
<li> <a href="#!">FAVOURITE</a></li>
<li> <a href="#!">LIFESTYLE</a></li>
<li> <a href="#!" className="header__nav-btn">SIGN UP</a></li>
       </ul>
        </nav>
    </div>
</div>
     </header>
     );
}
 
export default Header;