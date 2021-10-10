import s from "./index.module.scss";
import Module from "../Module";

const Program = ({ course }) => {
  let specializedSubjects =
    course.specializedSubjects && Array.isArray(course.specializedSubjects)
      ? course.specializedSubjects.reduce((acc, item, i) => {
          let index = Math.floor(i / 5);

          acc[index] = acc[index] || [];
          acc[index].push(item);

          return acc;
        }, [])
      : [];

  return (
    <div className={s.program}>
      <h3 className={s.title}>{course.title}</h3>
      <div className={s.modules}>
        {specializedSubjects.map((specializedSubject, i) => (
          <Module
            title={`${i + 1} модуль`}
            specializedSubject={specializedSubject}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Program;
