import { useEffect, useState, createContext } from "react";
import { api, iErrorMessage, iMessagesObj } from "../../services/api";
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
  iEditProfileTeacher,
} from "./types";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [studentMessage, setStudentMessage] = useState([] as iMessagesObj[]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [modalStudant, setModalStudant] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalLoading, setModalLoading] = useState(true);
  const [user, setUser] = useState<null | iUserState>(null);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      const id = localStorage.getItem("@USERID") || "";

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
          setDashboardLoading(false);
          navigate(`/dashboard/student/${response.data.name}`);
        } else {
          setDashboardLoading(false);
          navigate(`/dashboard/teacher/${response.data.name}`);
        }
      } catch (error) {
        const currentError = error as AxiosError<iErrorMessage>;
        console.error(currentError.message);
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
      const currentError = error as AxiosError<iErrorMessage>;
      console.error(currentError.message);
      toast.error("Email ou senha inválidos");
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
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      const currentError = error as AxiosError<iErrorMessage>;
      toast.error(currentError.message + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitRegisterStudent = (data: iFormRegisterStudentData) => {
    const { name, email, age, password, photo_url } = data;
    const newData = {
      name: name,
      email: email,
      age: age,
      password: password,
      type: "student",
      photo_url: photo_url,
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
      photo_url,
    } = data;

    const newData = {
      name: name,
      email: email,
      password: password,
      age: age,
      bio: bio,
      school_year_preference: school_year_preference,
      grades: grades,
      type: "teacher",
      photo_url: photo_url,
    };
    userRegister(newData);
  };

  const editProfile = async (
    formData: iEditProfileTeacher,
    id: number | string | null
  ) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");

    try {
      setGlobalLoading(true);
      const response = await api.patch<iUserState>(`/users/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      const currentError = error as AxiosError<iErrorMessage>;
      toast.error(currentError.message + "");
    } finally {
      setModalLoading(false);
      setGlobalLoading(false);
    }
  };

  /*const submitEditProfile = (data: iEditProfileTeacher, id: number) => {
    editProfile(data, id);
    console.log(data);
  };*/

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  const deleteUser = async (id: number | string | null) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.delete(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Usuário deletado com sucesso!");
      logout();
    } catch (error) {
      const currentError = error as AxiosError<iErrorMessage>;
      toast.error(currentError.message + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  // ----------------

  const createMessage = async (formData: iMessagesObj) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    const token2 = token.replaceAll("\"", "\\\"");
 
    try {
      setGlobalLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post("/messages", formData, {
        headers: { Authorization: `Bearer ${token2}` },
      });
      toast.success("Mensagem enviada com sucesso");
      setModalLoading(false)
    } catch (error) {
      const currentError = error as AxiosError<iErrorMessage>;
      toast.error(currentError.message + "");
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitMessage = (data: iMessagesObj) => {
    const userData = user;
    const { message, title } = data;
    const newData = {
      name: userData?.name,
      email: userData?.email,
      message: message,
      title: title,
      userId: userData?.id,
    };

    // createMessage(newData);
  };

  return (
    <UserContext.Provider
      value={{
        setGlobalLoading,
        submitLogin,
        submitRegisterStudent,
        submitRegisterTeacher,
        // submitEditProfile,
        submitMessage,
        deleteUser,
        logout,
        editProfile,
        globalLoading,
        dashboardLoading,
        user,
        modalLoading,
        setModalLoading,
        setStudentMessage,
        studentMessage,
        modalStudant,
        setModalStudant,
        createMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
