import React from "react";
import { BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import Navigator, { IRoute } from "navigation/Navigator";
import Home from "screens/Home";

const About = loadable(() => import("screens/About"));

const routes: Array<IRoute> = [
  {
    key: "home",
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    key: "about",
    path: "/about",
    component: <About />,
    guard: () => false,
    redirect: <div>You have no privilege to access to this page</div>,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navigator routes={routes} />
    </BrowserRouter>
  );
}

export default App;
