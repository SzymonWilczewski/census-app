import { getRepository } from "typeorm";
import { Survey } from "../../entity/Survey";
import createError from "http-errors";
import { generateSurvey } from "../../utils/db-seed";

export const seed = async function () {
  const n = 100; // number of surveys to seed
  const surveys: any = Array.from(Array(n).keys()).map(generateSurvey); // n random surveys
  return await getRepository(Survey).save(surveys);
};

export const add = async function (survey: any) {
  return await getRepository(Survey).save(survey);
};

export const deleteOne = async function(id: number) {
  return await getRepository(Survey).delete(id);
}

export const getAll = async function () {
  return await getRepository(Survey).find();
};

export const getById = async function (id: number) {
  const survey = await getRepository(Survey).findOne(id);
  if (!survey) {
    throw createError(404, `survey with id=${id} not found`);
  }
  return survey;
};

export const update = async function (id: number, fieldsToUpdate: any) {
  const surveyRepository = getRepository(Survey);
  const survey = await surveyRepository.findOne(id);
  if (!survey) {
    throw createError(404, `survey with id=${id} not found`);
  }
  Object.assign(survey, fieldsToUpdate);
  return await surveyRepository.save(survey);
};

export const statistics = async function () {
  return {
    unemployment: [
      { name: "Mazowieckie", unemployment: 15 },
      { name: "Pomorskie", unemployment: 30 },
      { name: "Warmińsko-Mazurskie", unemployment: 20 },
    ],
    education: {
      "poland": [
        { name: "Wyższe", value: 10 },
        { name: "Średnie", value: 5 },
        { name: "Podstawowe", value: 5 },
      ],
      "mazowieckie": [
        { name: "Wyższe", value: 2 },
        { name: "Średnie", value: 2 },
        { name: "Podstawowe", value: 2 },
      ],
      "pomorskie": [
        { name: "Wyższe", value: 4 },
        { name: "Średnie", value: 2 },
        { name: "Podstawowe", value: 2 },
      ],
      "warminsko-mazurskie": [
        { name: "Wyższe", value: 2 },
        { name: "Średnie", value: 2 },
        { name: "Podstawowe", value: 2 },
      ]
    },
  };
};
