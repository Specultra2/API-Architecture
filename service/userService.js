const User = require('../db/model/userModel');
const constants = require('../constants');
const { formatMongoData } = require('../helper/dbHelper')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports.signup = async ({email, password}) => {
  try {
   const user = await User.findOne({email});
   if (user) {
     throw new Error(constants.userMessage.DUPLICATE_EMAIL);
   }

   await bcrypt.hash(password, 12); // recommend 10 - 12

   const newUser = new User({email, password});

   let result = await newUser.save();

   return formatMongoData(result);

  }catch(err) {
    console.log('Something went wrong: Service: createProduct', err);
    throw new Error(err);
  }
   
}
module.exports.login = async ({email, password}) => {
  try {
   const user = await User.findOne({email});
   if (!user) {
     throw new Error(constants.userMessage.USER_NOT_FOUND);
   }
   const isValid = bcrypt.compare(password, user.password);
   if (!isValid) {
     throw new Error(constants.userMessage.INVALID_PASSWORD)
   }

   const token = jwt.sign({id: user._id}, process.env.SECRET_KEY || 'my-secret-key', {expiresIn: '1d'})

   return {token};



  }catch(err) {
    console.log('Something went wrong: Service: login', err);
    throw new Error(err);
  }
   
}
