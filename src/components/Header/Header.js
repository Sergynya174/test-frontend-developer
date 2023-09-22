import React from "react";
import Logo from "../../image/logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <div className="custom-header h-20 ps-5 flex items-center shadow-md">
      <img className="" src={Logo} alt="logo" />
    </div>
  );
};
