const Joi = require('@hapi/joi');
const { validateRegister } = require('./authValidation');
// const User = require('../../model/User');

exports.registerHandler = async (req, res, next) => {
  //Validation before register a new User
  const { error } = validateRegister(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //Checking if the email already exists in mongodb
  // let emailExist = await User.findOne({ email: req.body.email });
  // if(emailExist) return res.status(400).send('Email exists');

  //Hash Password
  res.status(200).send(req.body);
};

exports.authLogin = (req, res, next) => {

};

