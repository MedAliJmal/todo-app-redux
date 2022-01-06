import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/action/todosActions";

const EditTask = ({ todo }) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [updatedTask, setUpdatedTask] = useState(todo.task)
const dispatch = useDispatch()
const handleEdit = () => { dispatch(editTask(todo.id,updatedTask))
    handleClose()}
  return <div>
      <button className="edit-btn"onClick={handleShow}>
      <i className="far fa-edit"></i>
      </button>

      <Modal  show={show} onHide={handleClose}>
          <div className="edit-page">
        <Modal.Header >
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className="form-control" onChange={(e)=> setUpdatedTask(e.target.value)} value={updatedTask}/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={handleEdit}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
  </div>;
};

export default EditTask;
