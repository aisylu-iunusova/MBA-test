import React, { useState } from "react";
import s from "./index.module.scss";
import { useViewport } from "./hooks";

const WIDTH_TABLET = 768;

const Module = ({ title, specializedSubject }) => {
  const { width } = useViewport();
  const [show, setShow] = useState(false);

  return (
    <div className={s.module}>
      <div className={s.content}>
        <h3
          className={`${s.title} ${show ? s["title-show"] : ""}`}
          onClick={() => {
            WIDTH_TABLET >= width && setShow(!show);
          }}
        >
          {title}
        </h3>
        {(show || WIDTH_TABLET < width) && (
          <ul>
            {specializedSubject.map((item, i) => (
              <li key={item + i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Module;
