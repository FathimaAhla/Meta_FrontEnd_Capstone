import Heading from "../sections/menuPages/Heading";
import FoodMenu from "../../assets/menu.jpg";

export default function Menu() {
  return (
    <>
      <Heading />
      <div>
        <img src={FoodMenu} className="food-menu"/>
      </div>
    </>
  );
}
