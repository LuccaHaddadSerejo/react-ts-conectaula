import * as yup from "yup";

export const editPrefTeacherSchema = yup.object().shape({
  school_year_preference: yup
    .array()
    .min(1, "Marque ao menos uma opção!")
    .of(yup.string())
    .required("Marque ao menos uma opção!")
    .nullable(),
  grades: yup
    .array()
    .min(1, "Marque ao menos uma opção!")
    .of(yup.string())
    .required("Marque ao menos uma opção!")
    .nullable(),
});
