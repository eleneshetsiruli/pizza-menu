import FocacciaImage from "./pizzas/focaccia.jpg";
import MargheritaImage from "./pizzas/margherita.jpg";
import SpinaciImage from "./pizzas/spinaci.jpg";
import FunghiImage from "./pizzas/funghi.jpg";
import SalaminoImage from "./pizzas/salamino.jpg";
import ProsciuttoImage from "./pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: FocacciaImage,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: MargheritaImage,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: SpinaciImage,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: FunghiImage,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: SalaminoImage,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: ProsciuttoImage,
    soldOut: false,
  },
];

interface pizzaData {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

export default pizzaData;
