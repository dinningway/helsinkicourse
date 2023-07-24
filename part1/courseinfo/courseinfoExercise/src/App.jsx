import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import Part from './components/Part'; //don't even need to import here cause i already called it in context component but leaving here for reference

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
      {/*<Content parts={parts[0]} exercises={exercises1}/>
      <Content parts={parts[1]} exercises={exercises2}/>
      <Content parts={parts[2]} exercises={exercises3}/>*/}
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