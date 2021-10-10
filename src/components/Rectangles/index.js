import React from "react";
import s from "./index.module.scss";
import Rectangle from "../Rectangle";

const Rectangles = () => {
  return (
    <>
      <div className={s.rectangles}>
        <Rectangle title={"Практические модули"}>
          <span>
            Работа над собственными проектами: практика групповых
            взаимодействий, кейс-методы, эссе
          </span>
        </Rectangle>
        <Rectangle title={"Итоговая аттестация"} theme={"dark"}>
          <li>
            Бизнес-проектирование (подготовка итоговой аттестационной работы,
            консультирование по бизнес-проектированию)
          </li>
          <li>Защита итоговой аттестационной работы</li>
        </Rectangle>
      </div>
    </>
  );
};

export default Rectangles;
