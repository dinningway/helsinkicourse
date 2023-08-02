# Part 2 Notes

## Synopsis

✏️ How to render a data collection
✏️ How to submit user data to a React app via HTML forms
✏️ How JavaScript code on the frontend can fetch data stored in the backend
✏️ How to add CSS styles to React Applications

When using concatenating things in `console.log` for debugging purposes, seperate with a `comma (,)` and not a `plus (+)`.

## JavaScript Arrays

I will be using functional programming operators such as `find`, `filter`, and `map` all the time.

### Higher-Order Functions

✏️ Pros:
Write code with less code in less time
Composition (taking functions and putting it in another function as their arg)
Reusability
Instead of:

```
function triple (x) {
    return x * 3
}
```

We can do:

```
var triple = function (x) {
    return x * 3
}
```

Functions are values!!

### Filter()

A method that takes a function to filter an array. Filter() expects its callback function to return a true or false statement.

Transforms an array to a smaller array. `reject()` does the same thing but inverted. `find()` also does the same thing as `filter()` but only returns the first item.

### Map()

Like filter(), it goes through an array but doesn't throw objects away. map() includes all items in array, expects the callback function to return a transformed object that will be put into the new array (think of[...x] destructor assignment).

Take an array and transform that into an array of the same length, but with each individual item transformed.

var names = animals.map(function (animal) {return animal.name})
var names = animals.map((animal) => {return animal.name})
var names = animals.map((animal) => animal.name) Implicitly returned

### Reduce()

It's not specific unlike `filter()`, `map()`, `find()`, etc. Expresses any list transformations. SUPER list transformation to use if you can't find any prebuilt method list tranformation that doesn't fit your project.

```
var orders = [
    {amount: 250},
    {amount: 420},
    {amount: 100}
]

var totalAmount = orders.reduce (function(sum,order) {
    console.log("hello, sum, order)
    return sum + order.amount
}, 0)
```

### Key-Attributes

TL;DR if an app is rendering a list component, you must include a `key` property.

React needs to know which element to update and reiterate, it just sees a bunch of <li> element. Won't know what to refresh hence you need a `key` identifier, helps React to keep track of what is what.

```
notes.map(note =>
  <li key={note.id}>
    {note.content}
  </li>
)
```

You can do the same as:

```
<ul>
  {notes.map((note, i) =>
    <li key={i}>
      {note.content}
    </li>
  )}
</ul>
```

Which accepts the indexed value `i` in this case, as a second parameter. IT IS NOT RECOMMENEDED. This is known as **Anti Pattern**. Why? "[It may break your application and display wrong data!](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)".

## Forms

We want to utilize and store data within the App component's state when the page updates and gets new notes added. We use `useState` and use it to define a piece of state that gets initialized with the initial notes array passed in the props, like so:

```
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
}
```

Adding an HTML forms within React:

```
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  <form onSubmit={addNote}>
    <input />
    <button type="submit">save</button>
  </form>
```

preventDefault(): "f the event does not get explicitly handled, its default action should not be taken as it normally would be". In this example, it prevents the default action of submitting a form where normally it would have the page reload automatically.

### [Controlled Component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

One way we can access data contained within the form's input element.

### Filtering Displayed Elements

JavaScript provides three different value-comparison operations:

=== — strict equality (triple equals)
== — loose equality (double equals)
Object.is()
