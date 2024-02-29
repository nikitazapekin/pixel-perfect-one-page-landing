import logo from './logo.svg';
 
import "./styles/reset.css"
import "./styles/common.css"
import Header from './components/header/header';
import Promo from './components/promo/promo';
import Brands from './components/brands/brands';
import Arrivals from './components/arrivals/arrivals';
import PayDaySail from './components/payday-sail/payday-sail';
import YoungFavourite from './components/young-favourite/young-favourite';
import Download from './components/download/download';
import Join from './components/join/join';
import Footer from './components/footer/footer';
function App() {
  return (
    <>
<Header />

<Promo />
<Brands />
<Arrivals />
<PayDaySail />
<YoungFavourite />
<Download />
<Join />
<Footer />
 
    </>
  );
}

export default App;
//https://www.figma.com/file/My6lLGRWRc9R0Jj1TPL8ZA/Shopping-Website-(Community)---Update?type=design&node-id=2-221&mode=design&t=VCN7B6XOfssj9Bsz-0