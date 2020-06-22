import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();

  function backToHome() {
    history.goBack();
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <p className="text-2xl font-medium">About</p>
        <p className="cursor-pointer text-blue-400" onClick={backToHome}>
          Back To Home
        </p>
      </div>
    </div>
  );
}

export default About;
