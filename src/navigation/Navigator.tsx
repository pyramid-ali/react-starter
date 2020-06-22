import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export interface IRoute {
  key: string;
  path: string;
  component: React.ReactNode;
  exact?: boolean;
  guard?: () => boolean;
  redirect?: React.ReactNode | string;
}

interface INavigator {
  routes: Array<IRoute>;
}

const Navigator: React.FC<INavigator> = ({ routes }) => {
  function renderRedirect(redirect: React.ReactNode | string): React.ReactNode {
    if (typeof redirect === "string") {
      return <Redirect to={redirect} />;
    }

    return redirect;
  }

  function renderRoute({
    key,
    exact = false,
    path,
    component,
    guard,
    redirect,
  }: IRoute) {
    return (
      <Route exact={exact} key={key} path={path}>
        {guard && guard() ? renderRedirect(redirect) : component}
      </Route>
    );
  }

  return <Switch>{routes.map(renderRoute)}</Switch>;
};

export default Navigator;
