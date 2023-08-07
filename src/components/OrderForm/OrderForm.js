import { useState } from "react";
import { addOrder } from "../../apiCalls";

function OrderForm({ setOrders, orders }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [formError, setFormError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length > 0 && ingredients.length > 0) {
      addOrder({
        id: Date.now(),
        name: name,
        ingredients: ingredients
      }).then(res => setOrders([...orders, res]))
      setFormError("");
    } else {
      setFormError("Please complete your order")
    }
    clearInputs()
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        value={ingredient}
        onClick={(e) => {
          e.preventDefault()
          setIngredients([...ingredients, e.target.value])
        }}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => {
          e.preventDefault()
          setName(e.target.value)
        }}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>
      <p>{formError}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
