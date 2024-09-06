import { list } from "postcss";
import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete})
{
    return <section>
        <h2 className="text-2xl font-bold text-contrast mb-4">Tasks</h2>
        <NewTask onAdd={onAdd}></NewTask>
        {tasks.length === 0 && 
        (<p className="text-text-color my-4">This project does not have any tasks yet.</p>)}
        {tasks.length > 0 &&
        <ul className="p-4 mt-8 rounded-md bg-secondary-lighter">
            {tasks.map((task) => 
            <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button className="text-contrast hover:text-red-500" onClick={()=> onDelete(task.id)}>Clear</button>
            </li>)}
        </ul>}
    </section>
}