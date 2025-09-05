var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {

/*   Sessions
  req.session.ban = true;

  Cookies
  res.cookie("age", 25);
  console.log(req.cookies); */

  res.render("index", { title: "Express" });
});

/* Read Cookies */

router.get("/readCookies", function (req, res) {
  console.log(req.cookies.age);
  res.send("Cookie Checked"); 
 
});

/* Delete Cookies */

router.get("/deleteCookies", function (req, res) {
  res.clearCookie("age");
  res.send("Cookie Deleted");
});

/* Sessions */

router.get("/checkBan", function (req, res) {
  console.log(req.session);

  if (req .session.ban === true) {
    res.send("You are banned");
  } else {
    res.send("You are not banned");
  }
});

router.get("/removeBan", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("Ban removed");
  });
});



/* CRUD Operations */

/* Create User */
router.get("/create", async function (req, res, next) {
  const createdUser = await userModel.create({
    username: "john_doe",
    name: "John Doe",
    age: 30,
  });
  res.send(createdUser);
});

/* Find all Users - Always return Array*/

router.get("/find", async function (req, res, next) {
  const allUsers = await userModel.find();
  res.send(allUsers);
});

/* Find One Individual User */

router.get("/findOne", async function (req, res, next) {
  const oneUser = await userModel.findOne({ username: "john_doe" });
  res.send(oneUser);
});

/* Delete User */

router.get("/delete", async function (req, res, next) {
  const deletedUser = await userModel.findOneAndDelete({
    username: "john_doe",
  });
  res.send(deletedUser);
});

module.exports = router;
