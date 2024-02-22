const router = require('express').Router();
const {
  createUrl,
  getHome,
  getLongUrl,
} = require("../controllers/UrlController");
/* GET home page. */
router.route("/").get(getHome).post(createUrl);
router.get("/:alias", getLongUrl);

module.exports = router;
