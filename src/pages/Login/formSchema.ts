import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido."),
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
    )
});
