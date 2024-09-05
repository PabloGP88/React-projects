import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectsSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selecProjectId: undefined,
    projects: []
  });

  function handleStartAddProject()
  {
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selecProjectId: null,
      }
    });
  }

  let content;

  if (projectsState.selecProjectId === null)
  {
    content = <NewProject />;
  } else if (projectsState.selecProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 bg-background">
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
