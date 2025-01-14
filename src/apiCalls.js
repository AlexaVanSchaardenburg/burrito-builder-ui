const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) => response.json());
};

const addOrder = (data) => {
  return fetch("http://localhost:3001/api/v1/orders", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => {
    return res.json()
  })
}

export {
  getOrders,
  addOrder
}
