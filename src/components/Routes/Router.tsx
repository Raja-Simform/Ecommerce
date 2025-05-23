import { Route, Routes } from "react-router-dom";
import { type RouteItem, routes } from "../Routes/Routes";
import PrivateRouter from "../PrivateRouter/PrivateRoute";

export const Router = () => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};

function renderRoutes(routes: RouteItem[]) {
  return routes.map((route) => {
    let component = <route.element />;
    if (route.isAuth) {
      component = (
        <PrivateRouter>
          <route.element />
        </PrivateRouter>
      );
    }
    if (route.children) {
      return (
        <Route path={route.path} element={component}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route path={route.path} element={component} />;
  });
}
