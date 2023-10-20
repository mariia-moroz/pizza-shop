const { Order } = require("../../models/orders/order");

async function add(req, res) {
  const order = await Order.create(req.body);
  res.status(201).json(order);
}

module.exports = add;
