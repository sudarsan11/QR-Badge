const express = require('express');
const router  = express.Router();
const QRCode = require('qrcode');




router.post('/generate', (req,res,next) => {

  console.log(req.body);

  QRCode.toDataURL(req.body.toString())
  .then(url => {
   console.log(url)
  })
  .catch(err => {
    console.error(err)
  })
})

module.exports = router;
