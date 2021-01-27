import './App.css';
import { useState } from 'react'
import Dashboard from './components/dashboard'

const initialState = {
  dashboards: [
    { name: "Tanulás", newCardInputs: { titleInput: "", descriptionInput: "", isShown: false }, todos: [
      { title: "React", description: "A useState-et" },
      { title: "Vanilla JS", description: "Legalább 2 kata" },
    ]},
    { name: "Bevásárlás", newCardInputs: { titleInput: "", descriptionInput: "", isShown: false }, todos: [
      { title: "Aldi", description: "Tej, kenyér"},
      { title: "Media Markt", description: "Porszívó"}
    ]}
  ]
}


function App() {

  const [ todoAppState, setTodoAppState ] = useState(initialState)

  const openNewCardBox = (dashboard) => {
    const nextDashBoards = []

    for (let currentDashboard of todoAppState.dashboards) {
      const newDashboard = {}

      newDashboard.name = currentDashboard.name
      newDashboard.todos = currentDashboard.todos

      newDashboard.newCardInputs = {}
      newDashboard.newCardInputs.titleInput = currentDashboard.newCardInputs.titleInput
      newDashboard.newCardInputs.descriptionInput = currentDashboard.newCardInputs.descriptionInput

      if (currentDashboard.name === dashboard.name) {
        newDashboard.newCardInputs.isShown = true
      } else {
        newDashboard.newCardInputs.isShown = currentDashboard.newCardInputs.isShown
      }

      nextDashBoards.push(newDashboard)
    }

    const nextState = { dashboards: nextDashBoards }
    setTodoAppState(nextState)
  }

  return (
    <div className="App">

      { todoAppState.dashboards.map((dashboard) =>

        <div className="dashboard" key={dashboard.name}>
          {
            dashboard.newCardInputs.isShown
              ?
            <div className="newCard">
              <input value={dashboard.newCardInputs.titleInput} onChange={(e) => console.log(e.target.value)}/>
              <input value={dashboard.newCardInputs.descriptionInput} onChange={(e) => console.log(e.target.value)}/>
            </div>
              :
            <button onClick={() => openNewCardBox(dashboard)}>New card</button>
          }

          <h1>{ dashboard.name }</h1>
          { dashboard.todos.map(todo =>
            <div className="todo">
            <h2>{ todo.title }</h2>
            <p>{  todo.description }</p>
            </div>
          )}
        </div>

      )}
    </div>
  );
}

export default App;
