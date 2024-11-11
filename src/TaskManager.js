import React from 'react';
import {v4 as uuidv4} from 'uuid';


function TaskManager(props) {
    const [tasks, setTasks] = React.useState([]);

    function addTask(title, e) {
        e.preventDefault();
        console.log(title);
        const task = {
            title: title,
            completed: false,
            id: uuidv4(),
        }
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    function toggleTaskCompletion(id) {
        console.log(id);
        setTasks(allTasks =>
            allTasks.map(task => task.id === id ? { ...task, completed: true } : task)
        );
    }


    return (
        <>
            {tasks.map((task) => (
                <div key={task.id} style={{border: '1px solid black'}} id={task.id}>
                    <div>
                        {task.title}
                    </div>
                    <button onClick={(e) => toggleTaskCompletion(e.target.parentElement.attributes.getNamedItem("id").value)}>
                        {task.completed ? "Completed" : "Not Completed"}
                    </button>
                </div>
            ))}

            <form onSubmit={(e) =>  addTask(e.target.title.value, e)}>
                <input type={"text"} name={"title"}/>
                <button type={"submit"}>Add Task</button>
            </form>
        </>
    );
}

export default TaskManager;