
import Card from "../card/card";
import "./arrivals.css"
import Cat1 from "../../img/categories/cat-01.jpg"
import Cat2 from "../../img/categories/cat-02.jpg"
import Cat3 from "../../img/categories/cat-03.jpg"
const Arrivals = () => {
    const arrayOfImgs = [Cat1, Cat2, Cat3]
    return (
        <section className="arrivals">

            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">
                        New Arrivals

                    </h2>
                </div>
                <div className="arrivals__cards">
                    {arrayOfImgs.map((item, index) => (
                        <Card img={item} key={index} />

                    ))}
                </div>
            </div>
        </section>
    );
}

export default Arrivals;