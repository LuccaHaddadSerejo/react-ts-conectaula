import axios from "axios";
import { iUserState } from "../contexts/userContext/types";
import { AxiosError } from "axios";

export interface iGradesObj {
  id: number;
  schooling: string;
  specific_grades: string[];
}

export interface iMessagesObj {
  id?: number;
  teacher_id: number;
  student_id: number;
  message: string;
}

export interface iErrorMessage {
  message: string;
}

export const api = axios.create({
  baseURL: "https://api-conectaula.onrender.com",
  timeout: 20000,
});

export const getGradeByid = async (id: number) => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iGradesObj[]>(`/grade?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};

export const getAllGrades = async () => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iGradesObj[]>("/grades", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};

export const getAllTeachers = async () => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iUserState[]>("/users?type=teacher", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};

export const getAllMessages = async () => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iMessagesObj[]>("/messages", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};

export const getMessageById = async (id: number) => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iMessagesObj[]>(`/messages/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};

export const getAllStudents = async () => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iUserState[]>("/users?type=student", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};

export const getStudentById = async (id: number) => {
  const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
  try {
    const response = await api.get<iUserState[]>(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    console.error(currentError);
  }
};
