import "./Survey.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { API_URL } from "../config";
import axios from "axios";
import { useEffect } from "react";
import { isAuth, getUser } from "../utils";
import { useHistory } from "react-router";

const Survey = () => {
  const history = useHistory();

  useEffect(() => {
    if (!isAuth() || getUser().role === "admin") {
      history.push("/");
    }
  }, [history]);

  const pesel = (pesel) => {
    let year = Math.trunc(pesel.slice(0, 2));
    let month = Math.trunc(pesel.slice(2, 4));
    let day = Math.trunc(pesel.slice(4, 6)) + 1;

    if (month > 80) {
      year += 1800;
      month -= 80;
    } else if (month > 60) {
      year += 2200;
      month -= 60;
    } else if (month > 40) {
      year += 2100;
      month -= 40;
    } else if (month > 20) {
      year += 2000;
      month -= 20;
    } else {
      year += 1900;
    }

    return {
      valid:
        Math.trunc(pesel.charAt(10)) ===
        [9, 7, 3, 1, 9, 7, 3, 1, 9, 7].reduce(
          (p, c, i) => p + Math.trunc(pesel.charAt(i)) * c,
          0
        ) %
          10,
      dateOfBirth: new Date([year, month, day].join("-"))
        .toJSON()
        ?.slice(0, 10),
      sex: Math.trunc(pesel.charAt(9)) % 2 === 1 ? "male" : "female",
    };
  };

  return (
    <div className="Survey">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          pesel: "",
          sex: "",
          dateOfBirth: "",
          voivodeship: "",
          address: "",
          peopleInApartment: "",
          countryOfBirth: "",
          maritalStatus: "",
          children: "",
          education: "",
          religion: "",
          isDisabled: "",
          professionalActivity: "",
          industry: "",
          earnings: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Pole wymagane!";
          } else if (values.name.length < 3) {
            errors.name = "Imi?? za kr??tkie!";
          }

          if (!values.surname) {
            errors.surname = "Pole wymagane!";
          } else if (values.surname.length < 3) {
            errors.surname = "Nazwisko za kr??tkie!";
          }

          if (!values.pesel) {
            errors.pesel = "Pole wymagane!";
          } else if (!/^\d+$/.test(values.pesel)) {
            errors.pesel = "Niedozwolone znaki!";
          } else if (values.pesel.length !== 11) {
            errors.pesel = "Numer PESEL powinien zawiera?? 11 cyfr!";
          } else if (!pesel(values.pesel).valid) {
            errors.pesel = "Niepoprawny numer PESEL!";
          }

          if (!values.sex) {
            errors.sex = "Pole wymagane!";
          } else if (pesel(values.pesel).sex !== values.sex) {
            errors.sex = "Podana p??e?? i numer PESEL nie s?? ze sob?? zgodne!";
          }

          if (!values.dateOfBirth) {
            errors.dateOfBirth = "Pole wymagane!";
          } else if (pesel(values.pesel).dateOfBirth !== values.dateOfBirth) {
            errors.dateOfBirth =
              "Podana data urodzenia i numer PESEL nie s?? ze sob?? zgodne!";
          }

          if (!values.voivodeship) {
            errors.voivodeship = "Pole wymagane!";
          }

          if (!values.address) {
            errors.address = "Pole wymagane!";
          } else if (values.address.length < 3) {
            errors.address = "Adres za kr??tki!";
          }

          if (!values.peopleInApartment) {
            errors.peopleInApartment = "Pole wymagane!";
          } else if (!/^\d+$/.test(values.peopleInApartment)) {
            errors.peopleInApartment = "Niedozwolone znaki!";
          } else if (Math.trunc(values.peopleInApartment) <= 0) {
            errors.peopleInApartment = "Ilo???? os??b musi by?? dodatnia!";
          }

          if (!values.countryOfBirth) {
            errors.countryOfBirth = "Pole wymagane!";
          } else if (values.countryOfBirth.length < 3) {
            errors.countryOfBirth = "Kraj urodzenia za kr??tki!";
          }

          if (!values.maritalStatus) {
            errors.maritalStatus = "Pole wymagane!";
          }

          if (!values.children) {
            errors.children = "Pole wymagane!";
          } else if (!/^\d+$/.test(values.children)) {
            errors.children = "Niedozwolone znaki!";
          } else if (Math.trunc(values.children) < 0) {
            errors.children = "Ilo???? dzieci nie mo??e by?? ujemna!";
          }

          if (!values.education) {
            errors.education = "Pole wymagane!";
          }

          if (!values.religion) {
            errors.religion = "Pole wymagane!";
          } else if (values.religion.length < 3) {
            errors.religion = "Nazwa wyznania za kr??tka!";
          }

          if (!values.isDisabled) {
            errors.isDisabled = "Pole wymagane!";
          }

          if (!values.professionalActivity) {
            errors.professionalActivity = "Pole wymagane!";
          }

          if (!values.industry) {
            errors.industry = "Pole wymagane!";
          } else if (values.industry.length < 3) {
            errors.industry = "Nazwa zawodu za kr??tka!";
          }

          if (!values.earnings) {
            errors.earnings = "Pole wymagane!";
          } else if (!/^\d+$/.test(values.earnings)) {
            errors.earnings = "Niedozwolone znaki!";
          } else if (Math.trunc(values.earnings) < 0) {
            errors.earnings = "Zarobki nie mog?? by?? ujemne!";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          if (window.confirm("Czy na pewno chcesz zako??czy?? spis?")) {
            axios
              .post(`${API_URL}/survey`, values)
              .then((response) => response.status === 200 && resetForm())
              .catch(({ response }) => {
                response && console.log(response.data.message);
              });
          }
        }}
      >
        {({ values, handleChange }) => (
          <Form className="Form">
            <div className="FieldDiv">
              <Field name="name" placeholder="Imi??" className="Field" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className="FieldDiv">
              <Field name="surname" placeholder="Nazwisko" className="Field" />
              <ErrorMessage name="surname" component="div" />
            </div>

            <div className="FieldDiv">
              <Field
                name="pesel"
                placeholder="Pesel"
                className="Field"
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value.length === 11) {
                    values.sex = pesel(e.target.value).sex;
                    values.dateOfBirth = pesel(e.target.value).dateOfBirth;
                  }
                }}
              />
              <ErrorMessage name="pesel" component="div" />
            </div>

            <div className="FieldDiv">
              <p>P??e??:</p>
              <label>
                <Field type="radio" name="sex" value="male" />
                M????czyzna
              </label>
              <label>
                <Field type="radio" name="sex" value="female" />
                Kobieta
              </label>
              <ErrorMessage name="sex" component="div" />
            </div>

            <div className="FieldDiv">
              <Field
                type="date"
                name="dateOfBirth"
                placeholder="Data urodzenia"
                className="Field"
                style={{ fontFamily: "arial" }}
                max={new Date().toISOString().split("T")[0]}
                required
              />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>

            <div className="FieldDiv">
              <Field as="select" name="voivodeship" className="Field" required>
                <option value="" hidden>
                  Wojew??dztwo
                </option>
                <option value="dolno??l??skie">dolno??l??skie</option>
                <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
                <option value="lubelskie">lubelskie</option>
                <option value="lubuskie">lubuskie</option>
                <option value="????dzkie">????dzkie</option>
                <option value="ma??opolskie">ma??opolskie</option>
                <option value="mazowieckie">mazowieckie</option>
                <option value="opolskie">opolskie</option>
                <option value="podkarpackie">podkarpackie</option>
                <option value="podlaskie">podlaskie</option>
                <option value="pomorskie">pomorskie</option>
                <option value="??l??skie">??l??skie</option>
                <option value="??wi??tokrzyskie">??wi??tokrzyskie</option>
                <option value="warmi??sko-mazurskie">warmi??sko-mazurskie</option>
                <option value="wielkopolskie">wielkopolskie</option>
                <option value="zachodniopomorskie">zachodniopomorskie</option>
              </Field>
              <ErrorMessage name="voivodeship" component="div" />
            </div>

            <div className="FieldDiv">
              <Field name="address" placeholder="Adres" className="Field" />
              <ErrorMessage name="address" component="div" />
            </div>

            <div className="FieldDiv">
              <Field
                name="peopleInApartment"
                placeholder="Ilo???? os??b pod danym adresem"
                className="Field"
              />
              <ErrorMessage name="peopleInApartment" component="div" />
            </div>

            <div className="FieldDiv">
              <Field
                name="countryOfBirth"
                placeholder="Kraj urodzenia"
                className="Field"
              />
              <ErrorMessage name="countryOfBirth" component="div" />
            </div>

            <div className="FieldDiv">
              <p>Stan cywilny:</p>
              <label>
                <Field type="radio" name="maritalStatus" value="single" />
                kawaler/panna
              </label>
              <label>
                <Field type="radio" name="maritalStatus" value="married" />
                ??onaty/zam????na
              </label>
              <label>
                <Field type="radio" name="maritalStatus" value="widowed" />
                wdowiec/wdowa
              </label>
              <label>
                <Field type="radio" name="maritalStatus" value="divorced" />
                rozwiedziony/rozwiedziona
              </label>
              <label>
                <Field type="radio" name="maritalStatus" value="separated" />w
                separacji
              </label>
              <ErrorMessage name="maritalStatus" component="div" />
            </div>

            <div className="FieldDiv">
              <Field
                name="children"
                placeholder="Ilo???? dzieci"
                className="Field"
              />
              <ErrorMessage name="children" component="div" />
            </div>

            <div className="FieldDiv">
              <p>Wykszta??cenie:</p>
              <label>
                <Field type="radio" name="education" value="higher" />
                wy??sze
              </label>
              <label>
                <Field type="radio" name="education" value="secondary" />
                ??rednie
              </label>
              <label>
                <Field type="radio" name="education" value="vocational" />
                zawodowe
              </label>
              <label>
                <Field type="radio" name="education" value="lowerSecondary" />
                gimnazjalne
              </label>
              <label>
                <Field type="radio" name="education" value="primary" />
                podstawowe
              </label>
              <label>
                <Field type="radio" name="education" value="none" />
                brak
              </label>
              <ErrorMessage name="education" component="div" />
            </div>

            <div className="FieldDiv">
              <Field name="religion" placeholder="Wyznanie" className="Field" />
              <ErrorMessage name="religion" component="div" />
            </div>

            <div className="FieldDiv">
              <p>Niepe??nosprawno????:</p>
              <label>
                <Field type="radio" name="isDisabled" value="true" />
                Tak
              </label>
              <label>
                <Field type="radio" name="isDisabled" value="false" />
                Nie
              </label>
              <ErrorMessage name="isDisabled" component="div" />
            </div>

            <div className="FieldDiv">
              <p>Aktywno???? zawodowa:</p>
              <label>
                <Field
                  type="radio"
                  name="professionalActivity"
                  value="employed"
                />
                zatrudniony/zatrudniona
              </label>
              <label>
                <Field
                  type="radio"
                  name="professionalActivity"
                  value="unemployed"
                />
                bezrobotny/bezrobotna
              </label>
              <label>
                <Field
                  type="radio"
                  name="professionalActivity"
                  value="inactive"
                />
                nieaktywny/nieaktywna
              </label>
              <ErrorMessage name="professionalActivity" component="div" />
            </div>

            <div className="FieldDiv">
              <Field name="industry" placeholder="Zaw??d" className="Field" />
              <ErrorMessage name="industry" component="div" />
            </div>

            <div className="FieldDiv">
              <Field name="earnings" placeholder="Zarobki" className="Field" />
              <ErrorMessage name="earnings" component="div" />
            </div>

            <div className="SubmitButtonDiv">
              <button type="submit" className="SubmitButton">
                Zako??cz
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Survey;
