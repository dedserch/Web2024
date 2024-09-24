import { Component, MouseEvent } from 'react'
import { ITask } from '../../../types/task.types'
import CheckBox from '../../UI/CheckBox'
import Button from '../../UI/Button'


interface TaskProps {
    task: ITask
    toggleComplete: (id: number) => void
    deleteTask: (id: number) => void
}

interface TaskState {
    showDelete: boolean
}

export class Task extends Component<TaskProps, TaskState> {
    state: TaskState = {
        showDelete: false
    }

    handleMouseEnter = () => {
        this.setState({ showDelete: true })
    }

    handleMouseLeave = () => {
        this.setState({ showDelete: false })
    }

    handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const { deleteTask, task } = this.props
        deleteTask(task.id)
    }

    handleToggleComplete = () => {
        const { toggleComplete, task } = this.props
        toggleComplete(task.id)
    }

    formatDate = (timestamp: number) => {
        const date = new Date(timestamp)
        return date.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    render() {
        const { task } = this.props
        const { showDelete } = this.state

        return (
            <div
                className="flex justify-between items-center border-b border-gray-300 p-2"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="flex items-center">
                    <CheckBox
                        isDone={task.isCompleted}
                        onChange={this.handleToggleComplete}
                    />
                    <div className="ml-2">
                        <p className="text-lg">{task.title}</p>
                        <p className="text-gray-500 text-sm">{task.description}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="text-gray-500 text-xs mr-4">
                        {this.formatDate(task.createdAt)}
                    </span>
                    {showDelete && (
                        <Button
                            name="Удалить"
                            className="bg-red-500 text-white px-4 py-1 rounded"
                            onClick={this.handleDeleteClick}
                        />
                    )}
                </div>
            </div>
        )
    }
}
