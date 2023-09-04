const User = require("../model/userModel.js");
const jwt = require("jsonwebtoken");

// JWT web token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_TOKEN, { expiresIn: "5d" });
};

//user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try{
    const user = await User.login(email, password);
    
    // create token
    const token = createToken(user._id);

    // send data
    res.status(200).json({email, token});
    
  }catch(error){
    res.status(400).json({error: error.message});
  };

};

//user signup
const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userLogin,
  userSignup,
};
