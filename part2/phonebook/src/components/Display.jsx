import Name from "./Name";
import Number from "./Number";

const Display = ({ persons }) => {
	return persons.map((person) => (
		<div key={person.id}>
			<Name name={person} /> <Number number={person} />
		</div>
	));
};

export default Display;
