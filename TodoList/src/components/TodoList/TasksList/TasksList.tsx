import { Component } from 'react'
import { ITask } from '../../../types/task.types'
import CheckBox from '../../UI/CheckBox'
import { Task } from './Task'


interface TasksListProps {
    tasks: ITask[]
    toggleComplete: (id: number) => void
    deleteTask: (id: number) => void
}

interface TasksListState {
    showOnlyIncomplete: boolean
}

export class TasksList extends Component<TasksListProps, TasksListState> {
    state: TasksListState = {
        showOnlyIncomplete: false
    }

    handleFilterChange = () => {
        this.setState(prevState => ({
            showOnlyIncomplete: !prevState.showOnlyIncomplete
        }))
    }

    render() {
        const { tasks, toggleComplete, deleteTask } = this.props
        const { showOnlyIncomplete } = this.state

        
        const filteredTasks = showOnlyIncomplete
            ? tasks.filter(task => !task.isCompleted)
            : tasks

        return (
            <div className="tasks-list">
                <div className="flex items-center mb-4">
                    <CheckBox
                        isDone={showOnlyIncomplete}
                        onChange={this.handleFilterChange}
                    />
                    <span className="ml-2 text-gray-700">Только невыполненные</span>
                </div>

                {filteredTasks.length > 0 ? (
                    filteredTasks.map(task => (
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
