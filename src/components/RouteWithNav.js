import { Route } from "react-router";
import Footer from "./Footer";
import Nav from "./Nav";

export const RouteWithNav = ({
  exact,
  path,
  type,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(routeProps) => {
        return (
          <>
            <Nav type={type === "user" ? "user" : "admin"} {...routeProps} />
            <Component {...routeProps} /> <Footer />
          </>
        );
      }}
    />
  );
};
