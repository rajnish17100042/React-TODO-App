import React from 'react';


let deleteAllTask = () => {
  // alert('checking if the button is working or not ');

  //check if data is present is present in the local storage 
  if (localStorage.getItem('localstorage') == null) {
    alert('nothing to delete');
    return;
  }

  let finaldelete = window.confirm("entire task will be deleted!! still want to delet all task??");
  if (finaldelete === true) {

    // delete entire local storage
    localStorage.clear();

    // refresh the page
    window.location.reload();
  }
}



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

              <button type="button" id="deleteallbtn" className="btn btn-danger" onClick={deleteAllTask}>
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



