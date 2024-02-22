const Url = require("../models/UrlModel");
exports.getHome = async (req, res) => {
  try {
    const data = await Url.find();

    res.render("index", { title: "Express", urls: data });
  } catch (err) {
    res.status(400).json({ error: "err" });
  }
};
exports.createUrl = async (req, res) => {
  try {
    await Url.create({
      longUrl: req.body.urlInput,
      alias: req.body.aliasInput,
    });
    res.redirect("/");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getLongUrl = async (req, res) => {
  try {
    const data = await Url.find({
      alias: req.params.alias,
    });
    const longUrl = data[0].longUrl;
    res.redirect(longUrl);
  } catch (err) {
    res.render("error", {
      message: "not found url",
      error: { status: "failed 404", stack: "error" },
    });
  }
};
