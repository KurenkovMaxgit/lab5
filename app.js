const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "src/public")));


const indexRouter = require("./src/routes/index");
app.use("", indexRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});