import React from 'react';


const TodoUi = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>Todo Application</h1>
          <div className="todo-inner">
            <div className="form-row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Enter your task" id="inputdata" onChange={props.saveinputdata} value={props.inputdata} />
                <input type="hidden" id="saveindex" />
              </div>
              <button type="button" className="btn btn-success mr-2" id="addtaskbtn" onClick={props.addTask}>
                Add Task
              </button>
              <button type="button" className="btn btn-success mr-2" id="savetaskbtn" style={{ display: "none" }}>
                Save Task
              </button>
              <button type="button" id="deleteallbtn" className="btn btn-danger">
                Delete All
              </button>
            </div>



          </div>
        </div>
      </div>
    </div >
  )
}

export default TodoUi;



