const express = require("express");

const { orders: ctrl } = require("../../controllers");

const { validation, ctrlWrapper } = require("../../middlewares");
const { schemas } = require("../../models/orders/order");

const validationMiddleware = validation(schemas.addSchema);

const router = express.Router();

router.post("/", validationMiddleware, ctrlWrapper(ctrl.add));

module.exports = router;
