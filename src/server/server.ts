const express = require("express");
const apiRouter = require("./routes");

const app = express();

app.use(express.static("public"));

app.use(apiRouter);

const port = 3000

app.listen(port, () => console.log(`Server listening on port ${port}`));

