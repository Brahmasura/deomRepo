import React, { useState } from "react";
import style from "./intro.module.scss";

const Intro = ({taskList, setTaskList}) => {
  const [isReady, setIsReady] = useState(false);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
   
  };

  const handleAdd = () => {
    setIsReady(true);
  }

  const handleSubmit = (task) => {
     const newTaskList = [...taskList, {name: task}];
     setTaskList(newTaskList);
     setTask("");
     setIsReady(false);
  }

  return (
    <div className={style.introDiv}>
      {isReady ? (
        <>
          <input
            type="text"
            name="task"
            value={task}
            placeholder="type you task"
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>To Do Intro</p>
        </>
      )}

      {/* button input to add task and submit it  */}
      {isReady ? (<>
            <button onClick={() => handleSubmit(task)}>Submit Task</button> 
      </>): (
        <>
         <button onClick={handleAdd}>Add Task</button>
        </>
      )}
    </div>
  );
};

export default Intro;
