import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RealEstateDetailPage from "../pages/RealEstateDetailPage";
import MyProfilePage from "../pages/MyProfilePage";
import { ROUTES } from "../constants/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SEARCH} element={<SearchResultsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.REAL_ESTATE_DETAIL} element={<RealEstateDetailPage />} />
      <Route path={ROUTES.PROFILE} element={<MyProfilePage />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes;
