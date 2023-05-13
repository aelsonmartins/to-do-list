import ToDoCss from "../todocontainer/ToDoList.module.css";
import AppCss from "../App.module.css";
import TrashIcon from "../img/Trash.svg";
import { useState } from "react";

function GenerateList() {
  //STATES CreateTask
  const [NameNewTask, setNameTask] = useState();
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || "[]"));

  function CreateTask() {
    //gera o Id aleatorio
    const genId = Math.random(2);
  
    //gera o item do array
    const Newtask = {id: genId, description: NameNewTask, status: false}
    
    //seta as tasks no LS
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
    setTasks([...tasks, Newtask]);//Adiciona nova task no array
  }

  //Task Finished (id, Status)
  const [Status,NewStatus] = useState(false);
  const [CompletedTaskId, SetCompleteTaskId] = useState(0);

  function CompleteTask(CompletedTaskId,Status) {
    const index = tasks.findIndex((task) => task.id == CompletedTaskId); //pega o index da task

    tasks[index].status = Status; //change de task status

    localStorage.setItem("tasks", JSON.stringify(tasks)); //seta o no json no LS

    setTasks([...tasks]);
  }


   //Task Removed (id)
   const [RemovedTaskId, SetRemoveTaskId] = useState(0);

  function DeleteTask(RemovedTaskId) {
    const index = tasks.findIndex((task) => task.id == RemovedTaskId); //pega o index da task

    tasks.splice(index, 1); //remove a task pelo index

    localStorage.setItem("tasks", JSON.stringify(tasks)); //seta o novo JSON no LS

    setTasks([...tasks]);
  }

  return (
    <>
      <div className={AppCss.new_task}>
        <input
          maxLength={100}
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="NewTask"
          id="NewTask"
          className={AppCss.input_new_task}
          onChange={(e) => setNameTask(e.target.value)} //seta o novo valor no state do nome ao digitar
        />
        <div onClick={CreateTask} className={AppCss.btn_create}>
          Add +
        </div>
      </div>

      <div className={ToDoCss.tasks}>
        <div className={ToDoCss.info}>
          <span className={ToDoCss.info_blue}>Tarefas criadas </span>

          <span className={ToDoCss.info_purple}>Concluídas</span>
        </div>

        <div className={ToDoCss.list}>
          {tasks?.map((task) => (
            <div className={ToDoCss.task + (task.status ? ' checked' : '')} key={task.id}>
              <input
                defaultChecked={task.status}
                type="checkbox"
                name="task"
                onChange={(e) => CompleteTask(task.id,e.target.checked)}
              />
              <label htmlFor="task">{task.description}</label>
              <img
                src={TrashIcon}
                alt="trash"
                className={ToDoCss.img_trash}
                title="Remover"
                onClick={() => DeleteTask(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenerateList;
