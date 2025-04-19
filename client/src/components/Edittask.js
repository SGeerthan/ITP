import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import'../css/editmodal.css'
import React, { useState  } from "react";
import axios from 'axios';

const EditTask = ({ taskId, onClose, onUpdate }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/warden/updateTask/${taskId}`, { taskName, description });
      onUpdate(); // Call the parent component's function to refresh tasks
      onClose(); // Close the modal after updating
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle error
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          <label>Description:</label><br/>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
