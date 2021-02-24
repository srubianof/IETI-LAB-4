import React from 'react';
import {TaskCard} from "../TaskCard";
import {getTasks} from "../../services/getTasks";

export const TaskPlanner = () => {
    const tasks = getTasks();
    return (
        <div>
            TaskPlanner Component
            {
                tasks.map(({description,responsible,status,dueDate})=>(
                    <TaskCard key={responsible.email} dueDate={dueDate} description={description} responsible={responsible.email} status={status} />
                ))
            }
        </div>
    )
};
