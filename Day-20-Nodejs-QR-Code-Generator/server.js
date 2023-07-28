const express = require("express");
const server = express();
const qrcodeRouter = require("./routes/qrcode");
const PORT = 3000;

server.use(express.static("./public"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/api/v1", qrcodeRouter);

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
