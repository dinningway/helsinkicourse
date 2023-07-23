//Header takes care of rendering the name of the course
//Content renders the parts and their number of exercises
//Total renders the total number of exercises.

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

{/*1.2: course information, step2, creating a Part component*/}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.parts} {props.exercises}</p> {/* This is "prop consumption" */}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} /> {/* This is "prop assignment" */}
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
  
  //Commenting out old part 1a code
  /*return (
    <div>
      <Part parts={props.part1} exercises={props.exercises1} />
      <Part parts={props.part2} exercises={props.exercises2} />
      <Part parts={props.part3} exercises={props.exercises3} />
    </div>
  )*/
}

{/* Commenting out the 1.1 Content components */}
/*const Content = ({parts, exercises}) => {
  return (
    <div>
      <p>{parts} {exercises}</p>
    </div>
  )
}*/

const Total = (props) => {
  console.log(props)
  
  let totalSum = 0
  
  props.parts.forEach((part) => {
    totalSum += part.exercises
  })

  return (
    <div>
      <p>Number of exercises {totalSum}</p>
    </div>
  )
}

/* One way of doing it where I directly use the exercises var
const Total = ({exercises}) => {
  return (
    <div>
      <p>Number of exercises {exercises}</p>
    </div>
  )
}
*/

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },  

    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
      {/* Commenting out the 1.1 Content components */}
      {/*<Content parts={part1} exercises={exercises1}/>
      <Content parts={part2} exercises={exercises2}/>
      <Content parts={part3} exercises={exercises3}/>*/}
      {/* Commenting out the 1.2 Content and Total components */}
      {/*<Content
      part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
      />
    <Total exercises={exercises1 + exercises2 + exercises3}/>*/}
    </div>
  )
}

export default App