import axios from "axios";
import { iUserState } from "../contexts/userContext/types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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
  timeout: 30000,
});

export const getGradeByid = async (id: number, token: string) => {
  try {
    const response = await api.get<iGradesObj[]>(`/grade?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};

export const getAllGrades = async (token: string) => {
  try {
    const response = await api.get<iGradesObj[]>("/grades", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};

export const getAllTeachers = async (token: string) => {
  try {
    const response = await api.get<iUserState[]>("/users?type=teacher", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};

export const getAllMessages = async (token: string) => {
  try {
    const response = await api.get<iMessagesObj[]>("/messages", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};

export const getMessageById = async (id: number, token: string) => {
  try {
    const response = await api.get<iMessagesObj[]>(`/messages/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};

export const getAllStudents = async (token: string) => {
  try {
    const response = await api.get<iUserState[]>("/users?type=student", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};

export const getStudentById = async (id: number, token: string) => {
  try {
    const response = await api.get<iUserState[]>(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const currentError = error as AxiosError<iErrorMessage>;
    toast.error(currentError.message + "");
  }
};
