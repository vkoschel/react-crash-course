import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Consulta',
        day: 'Feb 6th at 3:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Rolê',
        day: 'Feb 7th at 3:00',
        reminder: true,
    },
    {
        id: 3,
        text: 'Reunião',
        day: 'Feb 68h at 3:00',
        reminder: false,
    }
])

  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

