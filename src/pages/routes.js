import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./Dashboard";
import Incident from "./Incident";

export const routes = [
  {
    path: "/:type/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/:type/drones",
    component: () => <div>DroneManagement</div>,
  },
  {
    path: "/:type/drone-state",
    component: () => <div>Tình trạng drone</div>,
  },
  {
    path: "/:type/fly-setting",
    component: () => <div>Thiết lập đường bay</div>,
  },
  {
    path: "/:type/drone-statistic",
    component: () => <div>Thống kê drone</div>,
  },
  {
    path: "/:type/flight-hub",
    component: () => <div>Flight Hub</div>,
  },
  {
    path: "/:type/payloads",
    component: () => <div>PayloadManagement</div>,
  },
  {
    path: "/:type/metadata",
    component: () => <div>Meta Data</div>,
  },
  {
    path: "/:type/problem",
    component: () => <div>Problem</div>,
  },
  {
    path: "/:type/supervised-object",
    component: () => <div>Đối tượng giám sát</div>,
  },
  {
    path: "/:type/statistic",
    component: () => <div>Báo cáo thống kê</div>,
  },
  {
    path: "/:type/problems",
    component: () => <div>Sự cố</div>,
  },
  {
    path: "/:type/warning",
    component: () => <div>Cảnh báo</div>,
  },
  {
    path: "/:type/activity-log",
    component: () => <div>Lịch sử hoạt động</div>,
  },
  {
    path: "/:type/surveillance-domain",
    component: () => <div>Miền giám sát</div>,
  },
  {
    path: "/:type/handle-problem",
    component: Incident,
  },
  {
    path: "/:type/user-management",
    component: () => <div>Quản lý người dùng</div>,
  },
];

export default () => (
  <Switch>
    {routes.map(({ path, exact = false, component: Component, ...rest }) => {
      return (
        <Route
          key={path}
          exact={exact}
          path={path}
          component={Component}
          {...rest}
        />
      );
    })}
    <Redirect to="/" />
  </Switch>
);
