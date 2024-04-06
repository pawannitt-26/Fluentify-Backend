import express from "express";
import { protect, restricTo } from "../controllers/userController";
import {
  createCheckoutSession,
  //   createPrice,
  //   createProduct,
  //   getPrice,
  //   getProduct,
} from "../controllers/stripeController";

const router = express.Router();

router.post(
  "/create-checkout-session/",
  protect,
  restricTo("STUDENT"),
  createCheckoutSession
);
// router.post("/newProduct", protect, restricTo("TUTOR"), createProduct);
// router.post("/newPrice", protect, restricTo("STUDENT"), createPrice);
// router.get("/getProduct/:id", protect, restricTo("STUDENT"), getProduct);
// router.get("/getPrice/:id", protect, restricTo("STUDENT"), getPrice);

export default router;
