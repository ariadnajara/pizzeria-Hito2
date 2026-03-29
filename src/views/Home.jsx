import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

// Importamos las imágenes locales de tu carpeta assets
import imgNapolitana from "../assets/pizza-napolitana.jpg";
import imgEspanola from "../assets/pizza-española.jpg";
import imgPepperoni from "../assets/peperonni.jpeg";

// Definimos el array de pizzas AQUÍ MISMO
const pizzas = [
  {
    id: "p001",
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: imgNapolitana,
  },
  {
    id: "p002",
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: imgEspanola,
  },
  {
    id: "p003",
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: imgPepperoni,
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <main className="container-fluid px-5 py-5 bg-light">
        <div className="row justify-content-center g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
