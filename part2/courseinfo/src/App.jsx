import Header from "./components/Header";
import Course from "./components/Course";
import Total from "./components/Total";

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      {/*Since `course` now contains an array of 2 courses than like last time, we must map and go through the array list here. The map method goes over the `course` array and renders each Course component for every course object. Always remember that the orange part is just a PARAMETER, it's not representive of the real course that I'm passing through. Changed course to c for educational purposes.*/}
      {course.map((c) => (
        <div key={c.id}>
          <Course course={c} />
          <Total parts={c.parts} />
        </div>
      ))}
    </div>
  );
};

export default App;
