const User = require('../model/userModel.js');

//user login
const userLogin = async (req, res) => {
    res.status(200).json({message: 'login'});
};

//user signup
const userSignup = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password);

        res.status(200).json({email, user});
    }catch(error){
        res.status(400).json({error: error.message});
    };
};

module.exports = {
    userLogin,
    userSignup
  };