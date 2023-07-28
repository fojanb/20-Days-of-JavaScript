const express = require("express");
const qrcodeRouter = express.Router();
const postSecret = require("../controllers/qrcode");
qrcodeRouter.post("/qrcode", postSecret);
module.exports = qrcodeRouter;