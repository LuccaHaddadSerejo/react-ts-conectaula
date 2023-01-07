import { iMessagesObj } from "../../services/api";

export interface iUserProviderValue {
  submitLogin: (data: iFormLoginData) => void;
  submitRegisterStudent: (data: iFormRegisterStudentData) => void;
  submitRegisterTeacher: (data: iFormRegisterTeacherData) => void;
  submitEditProfile: (data: iUserState, id: number) => void;
  submitMessage: (data: iMessagesObj) => void;
  deleteUser: (id: number) => void;
  logout: () => void;
  globalLoading: boolean;
  dashboardLoading: boolean;
  user: null | iUserState;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserState {
  id: number;
  email: string;
  name: string;
  password: string;
  age: number;
  type: string;
  photo_url?: string;
  student_age?: string;
  schooling?: string;
  school_year?: string;
  bio?: string;
  school_year_preference?: string[];
  grades?: string[];
}

export interface iFormLoginData {
  email: string;
  password: string;
}

export interface iLoginRegisterResponse {
  accessToken: string;
  user: iUserState;
}

export interface iFormRegisterTeacherData {
  name: string;
  email: string;
  age: number;
  password: string;
  bio: string;
  confirm_password?: string;
  photo_url: string;
  school_year_preference: string[];
  grades: string[];
  type: string;
}

export interface iFormRegisterStudentData {
  name: string;
  email: string;
  age: number;
  password: string;
  confirm_password?: string;
  type: string;
}
