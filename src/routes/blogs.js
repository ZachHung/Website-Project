const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
router.get("/apple-nang-cap-camera", (req, res) => {
  res.render("blogFour", { error: true });
});
router.get("/cach-de-phong-iphone-bi-nhiem-virus", (req, res) => {
  res.render("blogThree", { error: true });
});
router.get("/iphone14-lieu-con-dinh-loi-nguyen-ve-pin", (req, res) => {
  res.render("blogOne", { error: true });
});
router.get("/4-cach-thiet-lap-kiem-soat-phu-huynh-cho-safari", (req, res) => {
  res.render("blog-2");
});
router.get("/", (req, res) => {
  res.render("blogs");
});
module.exports = router;
