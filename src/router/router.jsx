import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import IsAuth from "../services/auth/IsAuth";
import { OverlayLoader } from "../components/loader";
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth";
import IsGuest from "../services/auth/IsGuest";
import utc from 'dayjs/plugin/utc'
import ProfilePage from "../modules/Profile/pages/ProfilePage";
import ProjectsViewContainer from "../modules/porjects/containers/ProjectsViewContainer.jsx";
import TranslationPage from "../modules/translation/pages/TranslationPage.jsx";
import NotFoundPage from "../modules/auth/pages/NotFoundPage.jsx";
import ProjectsPage from "../modules/porjects/pages/ProjectsPage.jsx";
import dayjs from "dayjs";

const Router = () => {
  dayjs.extend(utc)
  return (
    <BrowserRouter>
      <Suspense fallback={<OverlayLoader />}>
        <IsAuth>
          <Routes>
            <Route path={"/"} element={<DashboardLayout />}>
              <Route
                path={"/projects"}
                index
                element={<ProjectsPage/>}
              />
              <Route
                  path={"projects/view/:id"}
                  element={<ProjectsViewContainer />}
              />
              <Route
                path={"/translations"}
                index
                element={<TranslationPage />}
              />
              <Route
                  path={"/profile"}
                  index
                  element={<ProfilePage />}
              />
              <Route
                path={"auth/*"}
                element={<Navigate to={"/projects"} replace />}
              />
              <Route
                path={"/"}
                element={<Navigate to={"/projects"} replace />}
              />
              <Route path={"*"} element={<NotFoundPage />} />
            </Route>
          </Routes>
        </IsAuth>

        {/*<IsGuest>*/}
        {/*  <Routes>*/}
        {/*    <Route path={"/auth"} element={<AuthLayout />}>*/}
        {/*      <Route index element={<LoginPage />} />*/}
        {/*      <Route path={'/auth/register'} element={<RegisterPage />} />*/}
        {/*    </Route>*/}
        {/*    <Route path={"*"} element={<Navigate to={"/auth"} replace />} />*/}
        {/*  </Routes>*/}
        {/*</IsGuest>*/}
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
