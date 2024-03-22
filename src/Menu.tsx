import { UseOpenHour } from "./UseOpenHour";
import pizzaData from "./data";
const numPizzas = pizzaData.length;
const { isOpen } = UseOpenHour();
export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>Authentic Italian cuisine</p>
      <ul className="pizzas">
        {numPizzas > 0 && isOpen && <Pizza data={pizzaData} />}
      </ul>
    </main>
  );
};

function Pizza({ data }: { data: pizzaData[] }) {
  return data.map((el) => (
    <li key={el.name} className={`${!el.soldOut ? "pizza" : "pizza sold-out"}`}>
      <img src={el.photoName} alt="photo" />
      <div>
        <h3>{el.name}</h3>
        <p>{el.ingredients}</p>
        <span>{el.soldOut ? "Sold Out" : el.price}</span>
      </div>
    </li>
  ));
}
