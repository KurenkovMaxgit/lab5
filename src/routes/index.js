const express = require("express");
const { getMonoCurrency } = require("../API/monoAPI");

const router = express.Router();
router.get("/", async (req, res) => {
  const currency = await getMonoCurrency();
  const filtered = currency.filter(
    (c) =>
      (c.currencyCodeA === 840 || c.currencyCodeA === 978) &&
      c.currencyCodeB === 980
  );
  filtered.forEach((c) => {
    if (c.currencyCodeA === 840) c.currencyCodeA = "USD";
    if (c.currencyCodeA === 978) c.currencyCodeA = "EUR";
    if (c.currencyCodeB === 980) c.currencyCodeB = "UAH";
  });

  res.render("currency", {
    getCurrency: filtered,
  });
});

router.get("/login", (req, res) => {
  const login = req.query.login; 
  if (login === "kurenkov.maxim3000@icloud.com")
    return res.render("moodleLogin");
  else {
    res.send("Access denied or invalid login");
  }
});

module.exports = router;
