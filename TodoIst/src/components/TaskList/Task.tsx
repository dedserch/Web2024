import { Component, MouseEvent } from 'react'
import { ITask } from '../../types/task.type'
import CheckBox from '../ui/CheckBox'
import Button from '../ui/Button'

interface TaskProps {
    task: ITask
    toggleComplete: (id: string) => void
    deleteTask: (id: string) => void
}

interface TaskState {
    isHovered: boolean
}

export class Task extends Component<TaskProps, TaskState> {
    state: TaskState = {
        isHovered: false
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true })
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false })
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
        const { isHovered } = this.state

        return (
            <div
                className="flex justify-between items-center border-b border-gray-300 p-2"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="flex items-center w-full">
                    <CheckBox
                        isDone={task.done}
                        onChange={this.handleToggleComplete}
                    />
                    <div className="ml-2 max-w-full break-words">
                        <p className="text-lg font-semibold break-words max-w-md">{task.title}</p>
                        <p className="text-gray-500 text-sm break-words max-w-md">
                            {task.description}
                        </p>
                        <p className="text-sm text-gray-400">{task.severity}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    {isHovered ? (
                        <Button
                            name="Удалить"
                            className="bg-red-500 text-white px-4 py-1 rounded"
                            onClick={this.handleDeleteClick}
                        />
                    ) : (
                        <span className="text-gray-500 text-xs mr-4">
                            {this.formatDate(task.createdAt)}
                        </span>
                    )}
                </div>
            </div>
        )
    }
}
