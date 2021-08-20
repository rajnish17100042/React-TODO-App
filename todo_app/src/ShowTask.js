import React from 'react';


let editTask = (index, task) => {
    // alert(`The task you want to delete is:${task} and the index of this task is:${index} `);
    alert(`current task is : "${task}" `);
    let newtask = prompt("Enter the Edited task:");
    //remove white spaces from start and end 
    newtask = newtask.trim();
    // console.log(newtask);

    // input task  validation
    if (newtask === '') {
        alert("Please Enter a task");
        return;
    }



    // now get data from the local storage
    let storedtask = localStorage.getItem('localstorage');
    let taskobj = JSON.parse(storedtask);

    taskobj[index] = newtask;



    // send the data back to the local storage
    localStorage.setItem('localstorage', JSON.stringify(taskobj));

    //reload the page
    window.location.reload();
}




let deleteTask = (index) => {
    // alert(index);
    // alert(`getting the index of the task to be deleted  index is:${index}`);

    //before deleting the task confirm once again 

    let finaldelete = window.confirm("Have you completed the task?? want to delete??");

    if (finaldelete === true) {
        let storedtask = localStorage.getItem('localstorage');
        let taskobj = JSON.parse(storedtask);

        //no need to chech if storedtask is null
        // alert(taskobj);
        // alert(typeof storedtask); //object 

        //  delete the task with the help of index parameter
        taskobj.splice(index, 1); // return the deleted element  ...original array is changed
        // alert(taskobj); just checking if task is deleted

        // now send the taskobj  to the lolcal storage
        localStorage.setItem('localstorage', JSON.stringify(taskobj));

        //reload the page
        window.location.reload();

    }

}

const ShowTask = () => {

    // get all the task from local storage
    let storedtask = localStorage.getItem('localstorage');
    // alert(storedtask);
    if (storedtask === null) {
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
                                    <td><button type="button" className="text-primary" onClick={() => { editTask(index, task) }}>Edit</button></td>
                                    {/* <td><button type="button" class="text-danger" onClick={deleteTask(index)}>Delete</button></td> */}
                                    {/* we need to use arrow function if we want to send some data as an argument */}
                                    <td><button type="button" className="text-danger" onClick={() => { deleteTask(index) }}>Delete</button></td>
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
