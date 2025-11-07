import { useEffect, useState } from 'react'

const App = () => {

    const [tasks,setTasks] = useState<any[]>([])

    const getTasks = () =>{
        fetch("/api/tasks")
        .then(res => res.json())
        .then(json => setTasks(json))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
       <div className={"container"}>
        {tasks.map((task) => {
             return <>
             <div key={task.id} className='task-card'>
                <h1>{task.title}</h1>
                <h2>{task.description}</h2>
                <p>Status: {task.status}</p>
             </div>
             </>
            })}
            </div>
    );
};
export default App;






// import TaskList from "./components/TaskList";

// function App() {
//   return (
//     <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
//       <h1>My Tasks</h1>
//       <TaskList />
//     </div>
//   );
// }

// export default App;
