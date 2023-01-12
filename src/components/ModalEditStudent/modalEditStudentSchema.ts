import * as yup from "yup";

export const modalEditStudentSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido."),
  age: yup.number().positive("A idade precisa ser positiva").integer(),
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
  photo_url: yup.string().url("Formato inválido"),
});
