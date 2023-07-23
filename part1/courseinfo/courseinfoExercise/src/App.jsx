//Header takes care of rendering the name of the course
//Content renders the parts and their number of exercises
//Total renders the total number of exercises.

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

{/*1.2: course information, step2, creating a Part component*/}
const Part = (props) => {
  return (
    <div>
      <p>{props.parts} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.part1} exercises={props.exercises1} />
      <Part parts={props.part2} exercises={props.exercises2} />
      <Part parts={props.part3} exercises={props.exercises3} />
    </div>
  )
}

{/* Commenting out the 1.1 Content components */}
/*const Content = ({parts, exercises}) => {
  return (
    <div>
      <p>{parts} {exercises}</p>
    </div>
  )
}*/

const Total = ({exercises}) => {
  let sum = 0;
  for (let i = 0; i < exercises.length; i++) {
    sum += numbers[i];
  }

  return (
    <div>
      <p>Number of exercises {exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      {/* Commenting out the 1.1 Content components */}
      {/*<Content parts={part1} exercises={exercises1}/>
      <Content parts={part2} exercises={exercises2}/>
      <Content parts={part3} exercises={exercises3}/>*/}
      <Content
      part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
      />
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App