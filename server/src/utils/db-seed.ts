function getRandomNumber(upper: number): number {
  return Math.floor(Math.random() * upper);
}

function getRandomElement(arr: string[]) {
  return arr[getRandomNumber(arr.length)];
}

export function generateSurvey() {
  const survey = {
    sex: ["none", "male", "female"][Math.floor(Math.random() * 3)],
    pesel: "00000000000",
    name: "test",
    surname: "test",
    dateOfBirth: new Date(+new Date() - Math.floor(Math.random() * 10e10)),
    countryOfBirth: getRandomElement([
      "poland",
      "ukraine",
      "russia",
      "germany",
      "singapore",
    ]),
    maritalStatus: getRandomElement([
      "single",
      "married",
      "widowed",
      "divorced",
      "separated",
    ]),
    education: getRandomElement([
      "none",
      "primary",
      "lowerSecondary",
      "vocational",
      "secondary",
      "higher",
    ]),
    address: "test",
    voivodeship: getRandomElement([
      "warminsko-mazurskie",
      "mazowieckie",
      "podkarpackie",
      "wielkopolskie",
    ]),
    children: getRandomNumber(4),
    professionalActivity: getRandomElement([
      "unemployed",
      "employed",
      "inactive",
    ]),
    isDisabled: Math.random() < 0.5,
    earnings: getRandomNumber(7500) + 2500,
    religion: "test",
    industry: getRandomElement([
      "motoryzacja",
      "budownictwo",
      "transport",
      "turystyka",
    ]),
    peopleInApartment: getRandomNumber(5) + 1,
  };

  return survey;
}