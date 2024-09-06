import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks })
{
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    })
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-secondary-bolder border-x-contrast">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-contrast mb-2">{project.title}</h1>
                    <button className="text-secondary-bolder hover:text-text-color fontbo" onClick={onDelete}>Delete</button>
                </div>
                <p className="mb-4 text-secondary-lighter">
                    {formattedDate}
                </p>
                <p className="text-text-color whitespace-pre-wrap">
                    {project.description}
                </p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}></Tasks>
        </div>
    );
}