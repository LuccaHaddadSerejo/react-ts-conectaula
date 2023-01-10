import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido."),
  age: yup
    .number()
    .required("A idade é obrigatória")
    .positive("Idade inválida")
    .integer()
    .moreThan(17, "É necessário ter 18 anos ou mais para se registrar"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "É necessário uma senha de no mínimo 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "É necessário no mínimo 1 letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário no mínimo 1 letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário no mínimo 1 número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    ),
  confirm_password: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas não são idênticas"),
  bio: yup.string().required("A bio é obrigatória"),
  photo_url: yup
    .string()
    .required("O link da foto é obrigatório")
    .url("Formato inválido"),
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
