import bicycleIcon from "../../../../assets/food/bicycle.svg";
import bruchetta from "../../../../assets/food/bruchetta.svg";
import greeksalad from "../../../../assets/food/greeksalad.jpg";
import lemondessert from "../../../../assets/food/lemondessert.jpg";

function SpecialsTab({ dishName, dishPrice, dishDescription }) {
    return (
        <section className="specials">
            {dishName === "Bruchetta" ? <img id="foodimg" src={bruchetta} alt={dishName} /> : dishName === "Greek salad" ? <img  id="foodimg" src={greeksalad} alt={dishName} /> : <img  id="foodimg" src={lemondessert} alt={dishName} />}
            <h5>{dishName}</h5>
            <h6>{dishPrice}</h6>
            <p>{dishDescription}</p>
            <button id="orderDeliveryButton">Order a delivery <img src={bicycleIcon} alt="Bicycle icon" /></button>
        </section>
    )
}

export default SpecialsTab; 