import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selecProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text)
  {
    setProjectsState(prevState =>{

      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selecProjectId,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id)
  {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id !== id)
      }
    });
  }

  function handleSelectProject(id)
  {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selecProjectId: id,
      }
    });
  }

  function handleStartAddProject()
  {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selecProjectId: null,
      }
    });
  }

  function handleAddProject(projectData)
  {
    setProjectsState(prevState =>{

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        selecProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject()
  {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selecProjectId: undefined,
      }
    });
  }

  function handleDeleteProject()
  {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selecProjectId: undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selecProjectId)
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selecProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}></SelectedProject>; 

  if (projectsState.selecProjectId === null)
  {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if (projectsState.selecProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 bg-background">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectedProject={handleSelectProject}
        selectedProjectId={projectsState.selecProjectId}
      />
      {content}
    </main>
  );
}

export default App;
