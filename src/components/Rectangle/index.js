import React from "react";
import s from "./index.module.scss";

const Rectangle = ({ title, theme, children }) => {
  return (
    <div
      className={`${s.rectangle} ${
        theme === "dark" ? s["rectangle-black"] : ""
      }`}
    >
      <h3 className={s.title}>{title}</h3>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default Rectangle;
