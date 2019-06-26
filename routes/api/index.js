const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./bookRoute");
const userRoutes = require("./userRoute");
const payPalRoutes = require("./payPalRoute");
const orderRoutes = require("./orderRoute");
const contactRoutes = require("./contactRoute");
const resetRoutes = require("./resetRoute");

// Book routes
router.use("/books", bookRoutes);

// User routes
router.use("/users", userRoutes);

// PayPal routes
router.use("/payPal", payPalRoutes);

// Order routes
router.use("/orders", orderRoutes);

// Contact routes
router.use("/contact", contactRoutes);

// Reset routes
router.use("/reset", resetRoutes);

// For anything else, render the html page
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
