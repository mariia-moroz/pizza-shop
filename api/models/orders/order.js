const Joi = require("joi");
const { Schema, model } = require("mongoose");

const { handleSchemaErrors } = require("../../helpers");

const orderSchema = new Schema({
  total_price: {
    type: Number,
    required: true,
  },
  items: {
    type: [
      {
        size: String,
        price: Number,
        ingredients: [String],
      },
    ],
  },
  message: String,
  status: {
    type: String,
    enum: ["received", "cooking", "out for delivery", "delivered"],
    default: "received",
  },
});

orderSchema.post("save", handleSchemaErrors);

const addSchema = Joi.object({
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

const schemas = {
  addSchema,
};

const Order = model("order", orderSchema);

module.exports = { Order, schemas };
