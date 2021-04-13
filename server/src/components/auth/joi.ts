import Joi from "joi";
import { Role } from "../../entity/User";

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  login: Joi.string().required(),
  password: Joi.string().required().min(6),
  passwordConfirmation: Joi.string().required(),
  role: Joi.string()
    .required()
    .valid(...Object.values(Role)),
});

export const loginSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
});