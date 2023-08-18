import { useState } from "react";
import Name from "./components/Name";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]); //An array that contains all the phone numbers
	const [newName, setNewName] = useState(""); //State for storing user-submitted name input

	const handleNameChange = (event) => {
		//console.log(event.target.value);
		setNewName(event.target.value);
	};

	const addName = (event) => {
		event.preventDefault(); //prevents default action of submitting a form (aka causing the page to reload)

		/*if the name is already added then
		  newName === persons ? alert(`${newName} is already added to phonebook`)
		  alert(`${newName} is already added to phonebook`)
    */

		const nameExists = persons.some((person) => person.name === newName);

		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
		} else {
			const nameObject = {
				name: newName,
				important: Math.random() < 0.5,
				id: persons.length + 1,
			};
			setPersons(persons.concat(nameObject));
			setNewName("");
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					{/*The event handler is called every time a change occurs in the input element.*/}
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<div>
				{persons.map((person) => (
					<Name key={person.id} name={person} />
				))}
			</div>
			<div>debug: {newName}</div>
		</div>
	);
};

export default App;
