const User = require('../model/userModel');

//user login
const userLogin = async (req, res) => {
    res.status(200).json({message: 'login'});
};

//user signup
const userSignup = async (req, res) => {
    res.status(200).json({message: 'signup'});
};

module.exports = {
    userLogin,
    userSignup
  };