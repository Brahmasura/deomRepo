import style from "./todoItem.module.scss";

import React, { useState } from "react";

const TodoItem = ({ name, index, taskList, setTaskList }) => {
  const [isEdit, setIsEdit] = useState(false);
 
  const [editedText, setEditedText] = useState("");

// to handlechange in text while typing in the input 
  const handleChange = (e) => {
    setEditedText(e.target.value);
  }

//   to set the stage for the editing of the task
  const handleEdit = (e) => {
    setIsEdit(true);
  };

  const handleUpdate = (index) => {
    if (/\d/.test(editedText)) {
        alert("Only alphabets are allowed. Please remove numbers.");
        return; // Stop further execution
      }
    const newTaskList = [...taskList];
    newTaskList[index].name = editedText;
    setTaskList(newTaskList);
    setIsEdit(false);
  }

  const handleDelete = (index) => {
  const newTaskList = [...taskList];
  newTaskList.splice(index,1);
  setTaskList(newTaskList);
  }



  return (
    <div className={style.todoDiv}>
      {isEdit ? (
        <>
          <input
            type="text"
            name="name"
            value={editedText}
            placeholder={name}
            onChange={handleChange}
          />
        </>
      ) : (
        <>{name}</>
      )}

      <div className={style.buttonDiv}>
        {isEdit ? (<>
            <button onClick={() => handleUpdate(index)}>Update</button>
        </>):(<>
            <button onClick={handleEdit}>Edit</button>
        </>)}

        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
