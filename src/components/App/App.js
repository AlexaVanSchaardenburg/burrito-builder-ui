import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, addOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders().then(res => setOrders(res.orders)).catch((err) => console.error("Error fetching:", err));
  }, []);

  function addToOrders (customerName, ingredients) {
   addOrder({
      id: Date.now(),
      name: customerName,
      ingredients: ingredients
    })
    .then(res => {
      setOrders([...orders, res])
    })
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addToOrders={addToOrders}/>
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
