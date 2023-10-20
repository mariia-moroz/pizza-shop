const Joi = require("joi");

const orderScheme = Joi.object({
  total_price: Joi.number().required(),
  items: Joi.array().items(
    Joi.object({
      size: Joi.string(),
      price: Joi.number(),
      ingredients: Joi.array().items(Joi.string()),
    })
  ),
  message: Joi.string(),
  status: Joi.string().valid(
    "received",
    "cooking",
    "out for delivery",
    "delivered"
  ),
});

module.exports = orderScheme;
