import { useEffect, useState } from "react";
import { fetchTasks } from './utils/fetchTasks';

  const TaskRoute = () => {
  const [post, setPost] = useState<Task[]>([]);

  type Post = { id: number; title: string};

async function loadPost() {
  const posts = await fetchTasks<Post[]>("/api/posts");
  console.log(posts);
}

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

}
export default TaskRoute

// import { useEffect, useState } from "react";

// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   status: string;
// }

//   const TaskRoute = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/tasks")
//       .then((res) => res.json())
//       .then((data) => setTasks(data))
//       .catch((err) => console.error("Error fetching tasks:", err));
//   }, []);

  
//   return (
//     <div className="container">
//       <h1>Tasks</h1>
//       {tasks.length > 0 ? (
//         tasks.map(task => (
//           <div key={task.id}>
//             <h2>{task.title}</h2>
//             <p>{task.description}</p>
//             <p>Status: {task.status}</p>
//           </div>
//         ))
//       ) : (
//         <p>No tasks found</p>
//       )}
//     </div>
//   )
// }
// export default TaskRoute
