import { useEffect, useState } from "react";
import s from "./App.module.scss";
import Program from "./components/Program";
import Rectangles from "./components/Rectangles";
import loader from "./assets/spinner.svg";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses")
      .then((res) => res.json())
      .then(({ data = [] }) => {
        setCourses(data.slice(0, 5));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });

  return (
    <div className={s.App}>
      <div className={s.page}>
        <h2>Специализированные дисциплины</h2>
        {courses.length === 0 ? (
          <div className={s.loader}>
            <img src={loader} alt="Загрузка" />
          </div>
        ) : (
          courses.map((course) => (
            <Program course={course} key={course.createdAt} />
          ))
        )}
        <Rectangles />
      </div>
    </div>
  );
}

export default App;
