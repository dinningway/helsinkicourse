{/*1.2: course information, step2, creating a Part component*/}
const Part = (props) => {
    return (
      <div>
        <p>{props.parts} {props.exercises}</p> {/* This is "prop consumption" */}
      </div>
    )
  }
export default Part;