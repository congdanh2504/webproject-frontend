import { Redirect, Route } from "react-router";
import { getToken, getUser } from "../api/Common";
import Nav from "./Nav";

export const PrivateRoute = ({
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
        return getToken() && getUser() ? (
          <>
            <Nav type={type === "user" ? "user" : "admin"} {...routeProps} />
            <Component {...routeProps} />{" "}
          </>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
};
