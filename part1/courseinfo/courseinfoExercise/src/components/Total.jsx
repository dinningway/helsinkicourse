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
export default Total;
  
  /* One way of doing it where I directly use the exercises var
  const Total = ({exercises}) => {
    return (
      <div>
        <p>Number of exercises {exercises}</p>
      </div>
    )
  }
  */