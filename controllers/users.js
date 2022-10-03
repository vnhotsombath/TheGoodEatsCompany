const User = require("../models/user");
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();
const { v4: uuidv4 } = require("uuid");
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  signup,
  login,
  profile,
  index,
};

// ----SIGNUP---- //
async function signup(req, res) {
  if (!req.file) return res.status(400).json({ error: "Please submit Photo!" });
  const key = `P4DEMO/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    if (err)
      return res.status(400).json({
        err: "Error from aws, check the server terminal!, you bucket name or keys are probley wrong",
      });

    const user = new User({ ...req.body, photoUrl: data.Location });
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      if (err.name === "MongoServerError" && err.code === 11000) {
        console.log(err.message, "err.message");
        res.status(423).json({
          errorMessage: err,
          err: `${identifyKeyInMongooseValidationError(
            err.message
          )} Already taken!`,
        });
      } else {
        res.status(500).json({
          err: err,
          message: "Internal Server Error, Please try again",
        });
      }
    }
  });
}

// ----LOGIN---- //
async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ err: "bad credentials" });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json({ err: "error message" });
  }
}

// ----PROFILE ---- //
async function profile(req, res) {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const posts = await Post.find({ user: user._id }).populate("user").exec();
    res.status(200).json({
      data: {
        user: user,
        posts: posts,
      },
    });
  } catch (err) {
    console.log(err.message, " <- profile controller");
    res.status(400).json({ error: "Something went wrong, try again!" });
  }
}

// ----INDEX---- //
async function index(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(400).json({ err });
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}

function identifyKeyInMongooseValidationError(err) {
  let key = err.split("dup key: {")[1].trim();
  key = key.slice(0, key.indexOf(":"));
  return key.replace(/^./, (str) => str.toUpperCase());
}
