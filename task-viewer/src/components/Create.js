import React, { useState } from "react";

export default function Create({ tasks, setTasks }) {
    const [task, setTask] = useState({
        name: '',
        desc: '',
        date: '',
        time: ''
    });
    const onChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        // console.log(task)
    }
    const onClick = () => {
        if (!task.name) { alert('name cannot be empty'); return; }
        if (!task.date) { alert('date cannot be empty'); return }
        if (!task.time) { alert('time cannot be empty'); return; }

        setTasks(cur => [...cur, task])
        // console.log(task)
        // console.log(tasks);
        let curTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
        curTasks.push(task)
        localStorage.tasks = JSON.stringify(curTasks);
        console.log(curTasks)
        console.log(localStorage)
    }
    return (
        <div>
            <h1>Task Creator</h1>
            <div>
                <h3>
                    Task Name

                </h3>
                <input type="text" required onChange={onChange} name='name' value={task.name} />

            </div>
            <div>
                <h3>

                    Task Description (Optional)
                </h3>
                <input type="text" onChange={onChange} name='desc' value={task.desc} />
            </div>
            <input type={'date'} required onChange={onChange} name='date' />
            <input type='time' required onChange={onChange} name='time' />
            <button onClick={onClick}>Create</button>
        </div>
    );
}
