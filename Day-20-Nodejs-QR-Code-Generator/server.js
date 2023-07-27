const express = require("express");
const QRCode = require("qrcode");
const server = express();
server.use(express.static("./public"));
const PORT = 3000;
server.use(express.json());
server.post("/api/v1/qrcode", (req, res) => {
  let { secret } = req.body;
  QRCode.toDataURL(secret, function (err, url) {
    res.status(200).json({ success: true, src: url });
  });
});
server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
