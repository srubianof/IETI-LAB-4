import React from 'react';
import {TaskCard} from "../TaskCard";

export const TaskPlanner = ({tasks}) => {
    console.log(tasks)
    return (
        <div>
            {
                tasks.map(({description,responsible,status,dueDate})=>(
                    <div style={{padding: '20px 0', width:'1000px'}} key={responsible.email}>
                        <TaskCard  dueDate={dueDate} description={description} responsible={responsible.name} status={status} />
                    </div>
                ))
            }
        </div>
    )
};
