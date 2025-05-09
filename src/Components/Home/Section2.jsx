import React from "react";
import backgroundImage from '../../assets/section2.png'; // adjust the path

const KeyRouteApp = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <img
        src={backgroundImage}
        alt="Background"
        className="w-200 md:w-200 h-auto"
      />
    </div>
  );
};

export default KeyRouteApp;
