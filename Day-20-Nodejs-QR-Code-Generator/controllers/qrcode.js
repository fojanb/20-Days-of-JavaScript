const QRCode = require("qrcode");
const postSecret = (req, res) => {
    let { secret } = req.body;
    QRCode.toDataURL(secret, function (err, url) {
      res.status(200).json({ success: true, src: url });
    });
  }
  module.exports = postSecret;