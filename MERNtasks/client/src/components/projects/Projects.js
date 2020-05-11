import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import TaskForm from "../tasks/TaskForm";
import ListOfTasks from "../tasks/ListOfTasks";

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Navbar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <ListOfTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
