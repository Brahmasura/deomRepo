import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import TodoItem from "./components/ToDoItem/TodoItem";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <h1>to do practice app</h1>
      {/* intro component */}
      <Intro taskList={taskList} setTaskList={setTaskList} />

      {/* rest of the task list component */}
      <div className="itemDiv">
        {taskList.map((element, index) => {
          return (
            <TodoItem
              name={element.name}
              index={index}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
