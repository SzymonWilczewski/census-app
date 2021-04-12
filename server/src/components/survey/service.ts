import { getConnection } from "typeorm";
import { Survey } from "../../entity/Survey";
import createError from "http-errors";

export const add = async function (survey: any) {
  return await getConnection().getRepository(Survey).save(survey);
};

export const getAll = async function () {
  return await getConnection().getRepository(Survey).find();
};

export const getById = async function (id: number) {
  const survey = await getConnection().getRepository(Survey).findOne(id);
  if (!survey) {
    throw createError(404, `survey with id=${id} not found`);
  }
  return survey;
};

export const update = async function (id: number, fieldsToUpdate: any) {
  const surveyRepository = getConnection().getRepository(Survey);
  const survey = await surveyRepository.findOne(id);
  if (!survey) {
    throw createError(404, `survey with id=${id} not found`);
  }
  Object.assign(survey, fieldsToUpdate);
  return await surveyRepository.save(survey);
};