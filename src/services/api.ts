import axios from "axios";
import { iUserState } from "../contexts/userContext/types";

const staticURL = "https://api-conectaula.onrender.com";

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

export const api = axios.create({
  baseURL: "https://api-conectaula.onrender.com",
  timeout: 10000,
});

export const getGradeByid = async (id: number) => {
  try {
    const response = await api.get<iGradesObj[]>(`${staticURL}/grade?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllGrades = async () => {
  try {
    const response = await api.get<iGradesObj[]>(`${staticURL}/grades`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTeachers = async () => {
  try {
    const response = await api.get<iUserState[]>(
      `${staticURL}/users?type=teacher`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllMessages = async () => {
  try {
    const response = await api.get<iMessagesObj[]>(`${staticURL}/messages`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMessageById = async (id: number) => {
  try {
    const response = await api.get<iMessagesObj[]>(
      `${staticURL}/messages/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllStudents = async () => {
  try {
    const response = await api.get<iUserState[]>(
      `${staticURL}/users?type=student`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getStudentById = async (id: number) => {
  try {
    const response = await api.get<iUserState[]>(`${staticURL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
