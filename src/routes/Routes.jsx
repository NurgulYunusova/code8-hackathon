import Calendar from "../components/calendar/Calendar";
import LoginPage from "../pages/Auth/login/LoginPage";
import AdminPage from "../pages/admin/AdminPage";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin1",
    element: <Calendar />,
  },
];
