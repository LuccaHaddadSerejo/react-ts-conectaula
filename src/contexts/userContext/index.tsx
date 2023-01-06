import React, { useEffect, useState, createContext } from "react";
import { api, iMessagesObj } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  iUserProviderValue,
  iUserProviderProps,
  iFormLoginData,
  iLoginRegisterResponse,
  iUserState,
  iFormRegisterTeacherData,
  iFormRegisterStudentData,
} from "./types";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [user, setUser] = useState<null | iUserState>(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      const id = JSON.parse(localStorage.getItem("@USERID") || "");

      if (!token) {
        setDashboardLoading(false);
        return;
      }

      try {
        const response = await api.get<iUserState>(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        if (response.data.type === "student") {
          navigate(`/dashboard/student/${response.data.name}`);
        } else {
          navigate(`/dashboard/teacher/${response.data.name}`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setDashboardLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (formData: iFormLoginData) => {
    try {
      setGlobalLoading(true);
      const response = await api.post<iLoginRegisterResponse>(
        "/login",
        formData
      );
      toast.success(`Seja bem-vindo, ${response.data.user.name}`);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      setUser(response.data.user);
      if (response.data.user.type === "student") {
        navigate(`/dashboard/student/${response.data.user.name}`);
      } else {
        navigate(`/dashboard/teacher/${response.data.user.name}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Email ou login inválidos");
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitLogin = (data: iFormLoginData) => {
    userLogin(data);
  };

  const userRegister = async (
    formData: iFormRegisterStudentData | iFormRegisterTeacherData
  ) => {
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post<iLoginRegisterResponse>(
        "/users",
        formData
      );
      toast.success("Conta criada com sucesso");
      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitRegisterStudent = (data: iFormRegisterStudentData) => {
    const { name, email, age, password, type } = data;
    const newData = {
      name: name,
      email: email,
      age: age,
      password: password,
      type: type,
    };
    userRegister(newData);
  };

  const submitRegisterTeacher = (data: iFormRegisterTeacherData) => {
    const {
      name,
      email,
      password,
      age,
      bio,
      school_year_preference,
      grades,
      type,
    } = data;

    const newData = {
      name: name,
      email: email,
      password: password,
      age: age,
      bio: bio,
      school_year_preference: school_year_preference,
      grades: grades,
      type: type,
    };
    userRegister(newData);
  };

  const editProfile = async (formData: iUserState, id: number) => {
    try {
      setGlobalLoading(true);
      const response = await api.patch<iUserState>(`/users/${id}`, formData);
      setUser(response.data);
      toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitEditProfile = (data: iUserState, id: number) => {
    editProfile(data, id);
  };
  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  const deleteUser = async (id: number) => {
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.delete(`/users/${id}`);
      toast.success("Usuário deletado com sucesso!");
      logout();
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const createMessage = async (formData: iMessagesObj) => {
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post<iMessagesObj>("/messages", formData);
      toast.success("Mensagem enviada com sucesso");
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitMessage = (data: iMessagesObj) => {
    createMessage(data);
  };

  return (
    <UserContext.Provider
      value={{
        submitLogin,
        submitRegisterStudent,
        submitRegisterTeacher,
        submitEditProfile,
        submitMessage,
        deleteUser,
        logout,
        globalLoading,
        dashboardLoading,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
