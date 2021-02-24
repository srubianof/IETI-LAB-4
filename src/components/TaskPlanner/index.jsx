import React from 'react';
import {TaskCard} from "../TaskCard";
import {getTasks} from "../../services/getTasks";

export const TaskPlanner = () => {
    const tasks = getTasks();
    return (
        <div>
            {
                tasks.map(({description,responsible,status,dueDate})=>(
                    <div style={{padding: '20px 0', width:'1000px'}} key={responsible.email}>
                        <TaskCard  dueDate={dueDate} description={description} responsible={responsible.email} status={status} />
                    </div>

                ))
            }
        </div>
    )
};
