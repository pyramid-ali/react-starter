import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function gotToAbout() {
    history.push("/about");
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <p className="text-2xl font-medium">Home</p>
        <p>
          Do you want to know more?{" "}
          <span className="cursor-pointer text-blue-400" onClick={gotToAbout}>
            Click Here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
