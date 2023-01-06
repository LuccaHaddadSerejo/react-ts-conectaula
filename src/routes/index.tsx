import { Routes, Route } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Login from "../pages/Login";
import DashboardStudent from "../pages/Dashboard student";
import DashBoardTeacher from "../pages/Dashboard teacher";
import RegisterStudent from "../pages/RegisterStudent";
import RegisterTeacher from "../pages/RegisterTeacher";
import Page404 from "../pages/Page404";
import ProtectedRoute from "../components/ProtectedRoute";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/student" element={<RegisterStudent />} />
      <Route path="/register/teacher" element={<RegisterTeacher />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard/student/:name" element={<DashboardStudent />} />
        <Route path="/dashboard/teacher/:name" element={<DashBoardTeacher />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
