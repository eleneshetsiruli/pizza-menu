import pizzaData from "./data";
const numPizzas = pizzaData.length;
console.log(numPizzas);
export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">{numPizzas > 0 && <Pizza data={pizzaData} />}</ul>
    </main>
  );
};
console.log(pizzaData);
function Pizza({ data }: { data: pizzaData[] }) {
  return data.map((el) =>
    el.soldOut ? (
      ""
    ) : (
      <li key={el.name} className="pizza">
        <img src={el.photoName} alt="photo" />
        <div>
          <h3>{el.name}</h3>
          <p>{el.ingredients}</p>
          <span>{el.price}</span>
        </div>
      </li>
    )
  );
}
