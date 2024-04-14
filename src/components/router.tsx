import React from "react";
import { RecoilRoot } from "recoil";
import GlobalStyles from "src/style/global";
import { Route, Routes } from "react-router-dom";
import Login from "src/Pages/auth/page";
import Write from "./Write/Write";
import MyNotificationPage from "src/Pages/MyNotification/MyNotificationPage";
import CategoryManage from "./CategoryManage/CategoryManage";
import PrivateRoute from "src/Hooks/private/PrivateRoute";
import MyNotificationDetailPage from "src/Pages/MyNotificationDetailPage/MyNotificationDetailPage";
const Router = () => {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<PrivateRoute component={Write} />} />
        <Route path="/write-read" element={<PrivateRoute component={MyNotificationPage} />} />
        <Route path="/" element={<PrivateRoute component={CategoryManage} />} />
        <Route path="/write-read/:id" element={<PrivateRoute component={MyNotificationDetailPage} />} />
      </Routes>
    </RecoilRoot>
  );
};
export default Router;
