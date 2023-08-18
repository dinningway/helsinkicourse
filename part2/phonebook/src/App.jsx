import { useState } from "react";
import Name from "./components/Name";
import Number from "./components/Number";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]); //An array that contains all the phone numbers
	const [newName, setNewName] = useState(""); //State for storing user-submitted name input
	const [newNumber, setNewNumber] = useState("");

	const handleNameChange = (event) => {
		//console.log(event.target.value);
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		//console.log(event.target.value);
		setNewNumber(event.target.value);
	};

	const addName = (event) => {
		event.preventDefault(); //prevents default action of submitting a form (aka causing the page to reload)

		/*if the name is already added then
		  newName === persons ? alert(`${newName} is already added to phonebook`)
		  alert(`${newName} is already added to phonebook`)
    */

		const nameExists = persons.some((person) => person.name === newName);
		//This uses the .some() method which "tests whether at least one element in the array passes the test implemented by the provided function". In this case, it tests and compares an existing name to a newly added name.

		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
		} else {
			const nameObject = {
				name: newName,
				number: newNumber,
				important: Math.random() < 0.5,
				id: persons.length + 1,
			};
			setPersons(persons.concat(nameObject));
			setNewName("");
			setNewNumber("");
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
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<div>
				{persons.map((person) => (
					<div key={person.id}>
						<Name name={person} /> <Number number={person} />
					</div>
				))}
			</div>
			<div>debug: {newName}</div>
		</div>
	);
};

export default App;
