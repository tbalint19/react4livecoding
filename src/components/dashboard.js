const Dashboard = ({ dashboard, openNewCardBox }) => {

  return (
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
  )
}

export default Dashboard;
