import { BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import fetchTasks from './routes/tasks/tasks.route'

// function tasks() {
//     return (
//         <div>
//             <h1>Tasks page</h1>
//             <nav  style={{ marginBottom: '20px' }}>
//                 <Link to="/"></Link>
//             </nav>
//         </div>
//     )
// }

function App() {
    <Router>
        <nav>
            <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
        </nav>

        <Routes>
            <Route path="/" element={<h1>Welcome to the Task App!</h1>} />
            <Route path="/tasks" element={<fetchTasks/>} />

        </Routes>
    </Router>
}
export default App


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
