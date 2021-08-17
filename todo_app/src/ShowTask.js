import React, { useState } from 'react';


const ShowTask = () => {

    // get all the task from local storage
    let storedtask = localStorage.getItem('localstorage');
    // alert(storedtask);
    if (storedtask == null) {
        // alert('nothing to show');
        return null;

    }
    else {
        let taskobj = JSON.parse(storedtask);
        // let [task, setTask] = useState(taskobj);
        return (
            <div className="container">
                <div className="table-inner" >
                    <table className="table mt-3 mb-0" id="taskdisplay">

                        {taskobj.map((task, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{task}</td>
                                    <td><button type="button" class="text-primary">Edit</button></td>
                                    <td><button type="button" class="text-danger">Delete</button></td>
                                </tr>
                            );
                        })}


                    </table>
                </div>
            </div>
        );
    }


}

export default ShowTask;
