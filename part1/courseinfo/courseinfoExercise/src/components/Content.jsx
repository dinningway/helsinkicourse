import Part from './Part';

const Content = (props) => {
    console.log(props)
  
    /*
      1. check if you have a parts prop
      1a. do you have parts prop? if so, iteratively spit out <Part > components 
      2. if no parts prop, return nothing
    */
  
      /*if(parts.length > 0) {
        return (
          <div>
            
          </div>
        )
      } else {
        return null
      }*/
  
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
export default Content;