import {Link} from 'react-router-dom';
import foodPhoto from '../../../assets/restauranfood.jpg';
export default function Heading() {
    return (
        <div id="heroSectiondiv">
            <section id="mainLeftSection">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="reserveTableButton">Reserve a table</button>
            </section>
            <section id="mainRightSection">
                <img src={foodPhoto} alt="Little Lemon restaurant food" />
            </section>
        </div>
    );
}