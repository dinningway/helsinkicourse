import Part from './Part';

const Content = (props) => {
  
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
}

export default Content;