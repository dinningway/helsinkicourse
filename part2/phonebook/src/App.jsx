import { useState } from "react";
import Display from "./components/Display";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]); //An array for the original data
	const [newName, setNewName] = useState(""); //State for storing user-submitted name input
	const [newNumber, setNewNumber] = useState(""); //State for storing user-submitted number input
	const [showAll, setShowAll] = useState([]); //An array for the filtered data

	const handleNameChange = (event) => {
		//console.log(event.target.value);
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		//console.log(event.target.value);
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		console.log(event.target.value);
		const filterValue = event.target.value.toLowerCase();
		const newFilter = persons.filter((person) => {
			return person.name.toLowerCase().includes(filterValue);
		});

		setShowAll(newFilter);
	};

	const addName = (event) => {
		event.preventDefault(); //prevents default action of submitting a form (aka causing the page to reload)

		/*if the name is already added then
		  newName === persons ? alert(`${newName} is already added to phonebook`)
		  alert(`${newName} is already added to phonebook`)
    */
		const nameExists = persons.some((person) => person.name === newName);
		//This uses the .some() method which "tests whether at least one element in the array passes the test implemented by the provided function". In this case, it tests and compares an existing name to a newly added name.

		if (!newName || !newNumber) {
			// if no name or number is provided at the input
			alert("You must enter a name!");
		}
		if (nameExists) {
			alert(`${newName} is already added to phonebook`);
		} else {
			const nameObject = {
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			};
			setPersons(persons.concat(nameObject));
			setShowAll(showAll.concat(nameObject)); // Update the filtered data as well
			setNewName("");
			setNewNumber("");
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				Filter shown with <input onChange={handleFilterChange} />
			</div>
			<h2>Add a new contact</h2>
			<form onSubmit={addName}>
				<div>
					{/*The event handler is called every time a change occurs in the input element.*/}
					Name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					Number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<div>
				<div>
					{showAll.length > 0 ? (
						<Display persons={showAll} />
					) : persons.length === 0 ? (
						"No matching persons"
					) : (
						<Display persons={persons} />
					)}
				</div>
			</div>
			<div>debug: {newName}</div>
		</div>
	);
};

export default App;
