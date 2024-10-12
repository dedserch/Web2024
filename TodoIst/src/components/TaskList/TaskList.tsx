import { Component } from 'react'
import { ITask } from '../../types/task.type'
import { Task } from './Task'

interface TaskListProps {
    tasks: ITask[]
    toggleComplete: (id: string) => void
    deleteTask: (id: string) => void
}

export class TaskList extends Component<TaskListProps> {
    render() {
        const { tasks, toggleComplete, deleteTask } = this.props

        return (
            <div className="space-y-4">
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <Task 
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete}
                            deleteTask={deleteTask}
                        />
                    ))
                ) : (
                    <p className="text-gray-500">Задач нет</p>
                )}
            </div>
        )
    }
}
