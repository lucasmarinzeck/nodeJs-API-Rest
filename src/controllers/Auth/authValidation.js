const Joi = require('@hapi/joi');

const validateRegister = (data) => {
  const registerSchema = {
    name:     Joi.string()
                .alphanum()
                .min(6)
                .max(255)
                .required(),
    email:    Joi.string()
                .email()
                .required(),
    password: Joi.string()
                .min(7)
                .max(1024)
                .required(),          
    birthday: Joi.number()
                .integer()
                .min(1900)
                .max(2020)
                .required()
  };
  return Joi.validate(data, registerSchema);
}
module.exports.validateRegister = validateRegister;