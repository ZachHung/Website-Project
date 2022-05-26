const express = require("express");
const router = express.Router();

router.get("/iphone14-lieu-con-dinh-loi-nguyen-ve-pin", (req, res) => {
  res.render("blog-1", { error: true });
});
router.get("/4-cach-thiet-lap-kiem-soat-phu-huynh-cho-safari", (req, res) => {
  res.render("blog-2");
});
module.exports = router;
