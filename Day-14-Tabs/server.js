const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
app.use(express.static("./public"))
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname,"./vanilla_js/index.html"));
});
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
