import React, { useEffect, useState } from "react";
import '../App.css'
export default function Sidebar({ tasks }) {
    const allTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
    const [viewTask, setViewTask] = useState(allTasks);
    const handleAll = () => {
        setViewTask(allTasks);
    };
    const handleUpcoming = () => {
        let cur = allTasks.sort((a, b) => {
            return new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time);
        });
        cur = cur.slice(0, 3);
        setViewTask(cur);
    };
    useEffect(() => {
        setViewTask(allTasks);
        // console.log(localStorage);
        // let all = JSON.parse(localStorage.getItem("tasks"));
        // console.log(all);
    }, [tasks]);

    return (
        <div className="allTasks">
            <div className="btns">

                <button onClick={handleAll}>All</button>
                <button onClick={handleUpcoming}>Upcoming</button>
            </div>
            <div className="cardContainer">

                {viewTask?.map((task, i) => {
                    return <div key={i} className='card'>
                        <h3>{task.name}</h3>

                        <h6>{task.date} {task.time}</h6>

                    </div>;
                })}
            </div>
        </div>
    );
}
