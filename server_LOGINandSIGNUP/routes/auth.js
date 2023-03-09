const express = require("express");
const User = require("../model/usermodel");
const Event = require("../model/events");
const authRouter = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth_middleware");
const e = require("express");

authRouter.post("/signup", async (req, res) => {
  try {
    const { Fname, Lname, mobileno, email, password, dob } = req.body;
    const existinguser = await User.findOne({ email });
    // console.log(existinguser);
    if (existinguser) {
      return res.status(400).json({ msg: "User with same email exists" });
    }

    const hashedpassword = await bcryptjs.hash(password, 8);
    let user = new User({
      email,
      password: hashedpassword,
      Fname,
      Lname,
      mobileno,
      dob,
    });
    user = await user.save();
    res.json({ user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

authRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      return res
        .status(400)
        .json({ msg: "User with the email does not exist" });
    }
    const isMatch = await bcryptjs.compare(password, existinguser.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect Password" });
    }
    const token = jwt.sign({ id: existinguser._id }, "passwordkey");
    console.log(existinguser._id);
    return res.json({ token, ...existinguser._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

authRouter.post("/validatetoken", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.json(false);
    }
    const verified_token = jwt.verify(token, "passwordkey");
    if (!verified_token) {
      return res.json(false);
    }

    const user = await User.findById(verified_token.id);
    if (!user) {
      return res.json(false);
    }
    res.json(true);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

authRouter.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
});

authRouter.post("/createEvents", auth, async (req, res) => {
  try {
    const {
      name,
      time,
      date,
      venue,
      discription,
      weburl,
      capacity,
      age,
      tags,
      duration,
      day,
      price,
      address,
    } = req.body;
    uid = req.user;
    console.log(uid);
    post = await Event.findOne({ name });

    if (post) {
      return res
        .status(400)
        .json({ msg: "event already created by this name" });
    }

    let event = new Event({
      name,
      time,
      date,
      venue,
      discription,
      weburl,
      capacity,
      age,
      hostid: uid,
      tags,
      duration,
      day,
      price,
      address,
      liked: [],
    });
    event = await event.save();
    res.json({ event });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

// authRouter.post("/getAllevents", auth, async (req, res) => {
//   uid = req.user;

//   try {
//     finalres = await Event.find({hostid:uid });
//     res.json(finalres);
//   } catch (e) {
//     res.status(500).json({ msg: e.message });
//   }
// });

authRouter.post("/getPost", auth, async (req, res) => {
  try {
    uid = req.user;
    finalres = await Event.find({ "hostid": { $ne:uid } });
    res.json(finalres);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

authRouter.post("/addLike", auth, async (req, res) => {
  uid = req.user;
  try {
    const user = await User.findById(uid);
    console.log(user);
    if (!user.liked.includes(req.body.item)) {
      user.liked.push(req.body.item);
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(400).json({ msg: "already liked" });
    }
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

authRouter.post("/removelike", auth, async (req, res) => {
  uid = req.user;
  try {
    const user = await User.findById(uid);
    console.log(user);
    if (!user.liked.includes(req.body.item)) {
      console.log(user.liked)
      res.status(400).json({ msg: "post not liked" });
    } else {
      console.log(user.liked)
      for( var i = 0; i < user.liked.length; i++){ 
        
        if ( user.liked[i] === req.body.item) { 
          user.liked.splice(i, 1); 
          await user.save();
          console.log(user.liked.length)
        }
      
    }
    res.status(200).json({ msg: "post removed" });
  } }catch (e) {
    res.status(500).json({ msg: e.message });
  }
});
authRouter.post("/getuserevent", auth, async (req, res) => {
  
  try {
    const uid = req.user;
    const userevents = await Event.find({hostid:uid});
    res.status(200).json(userevents);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

module.exports = authRouter;
