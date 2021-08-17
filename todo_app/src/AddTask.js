import React, { useState } from 'react';
import TodoUi from './TodoUi.js';
import ShowTask from './ShowTask.js';

const AddTask = () => {



    // let name = useState('Rajnish Patel')[0]; //returning 1st element of the array
    //   let [initial_value, func]=useState('Rajnish Patel');
    // here func can be used to change the current value of the useState
    //   here initial value is Rajnish Patel
    // let [myName, setName] = useState('Rajnish Patel');

    // let [inputdata, setInputdata] = useState('Learn React Js');  //initial value of hook is 

    let [inputdata, setInputdata] = useState('');

    // saving the inputdata
    const saveInputdata = (event) => {
        setInputdata(event.target.value)
    }

    //on clicking the add task button this function will be called
    const addTask = () => {

        if (inputdata === '') {
            alert("Please Enter a task");
            return;
        }

        else if (isFinite(inputdata)) {
            alert("Please don't enter a numeric value");
            // clear the input field
            setInputdata('');
            return;
        }
        // alert(inputdata);

        // localStorage.setItem('localstorage', JSON.stringify(inputdata.value)); //will not work ..single item is added only
        // first get the data from the local storage
        let storedtask = localStorage.getItem('localstorage');
        // alert(storedtask);
        let taskobj;
        if (storedtask === null) {
            // creaye an empty array
            taskobj = [];
        }

        else {
            // convert the json string into json array and push the data
            taskobj = JSON.parse(storedtask);
        }

        //first remove the white spaces from start and end of the task
        inputdata = inputdata.trim();
        // alert(inputdata);
        // check if task is present in the storage
        if (taskobj.includes(inputdata)) {
            alert('This Task is already present in TODO list');
            // clear the input field
            setInputdata('');
            return;
        }
        else {
            // taskobj.push(inputdata.value);// add  latest task to end of array
            taskobj.push(inputdata);  // 
            // alert(taskobj);
            // now send the data to local storage in json string
            localStorage.setItem('localstorage', JSON.stringify(taskobj));

            // clear the input field
            setInputdata('');


        }
    }


    return (
        <>
            {/* passing function from parent to the child */}
            <TodoUi addTask={addTask} inputdata={inputdata} saveinputdata={saveInputdata} />
            <ShowTask />


        </>
    );

}

export default AddTask





