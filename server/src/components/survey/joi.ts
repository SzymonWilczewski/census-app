import Joi from "joi";
import {
  Education,
  MaritalStatus,
  ProfessionalActivity,
  Sex,
} from "../../entity/Survey";

export const updateSchema = Joi.object({
  sex: Joi.string()
    .valid(...Object.values(Sex)),
  pesel: Joi.string().length(11),
  name: Joi.string(),
  surname: Joi.string(),
  dateOfBirth: Joi.date(),
  countryOfBirth: Joi.string(),
  maritalStatus: Joi.string()
    .valid(...Object.values(MaritalStatus)),
  education: Joi.string()
    .valid(...Object.values(Education)),
  address: Joi.string(),
  voivodeship: Joi.string(),
  children: Joi.number().min(0),
  professionalActivity: Joi.string()
    .valid(...Object.values(ProfessionalActivity)),
  isDisabled: Joi.bool(),
  earnings: Joi.number().min(0),
  religion: Joi.string(),
  industry: Joi.string(),
  peopleInApartment: Joi.number().min(1),
});

export const addSchema = Joi.object({
  sex: Joi.string()
    .required()
    .valid(...Object.values(Sex)),
  pesel: Joi.string().length(11).required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  countryOfBirth: Joi.string().required(),
  maritalStatus: Joi.string()
    .required()
    .valid(...Object.values(MaritalStatus)),
  education: Joi.string()
    .required()
    .valid(...Object.values(Education)),
  address: Joi.string().required(),
  voivodeship: Joi.string().required(),
  children: Joi.number().min(0).required(),
  professionalActivity: Joi.string()
    .required()
    .valid(...Object.values(ProfessionalActivity)),
  isDisabled: Joi.bool().required(),
  earnings: Joi.number().min(0).required(),
  religion: Joi.string().required(),
  industry: Joi.string().required(),
  peopleInApartment: Joi.number().min(1).required(),
});