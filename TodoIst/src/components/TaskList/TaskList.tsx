import { Component } from 'react'
import { ITask } from '../../types/task.type'
import { Task } from './Task'

interface TaskListProps {
    tasks: ITask[]
    toggleComplete: (id: string) => void
    deleteTask: (id: string) => void
}

interface TaskListState {
    visibleTasksCount: number
}

export class TaskList extends Component<TaskListProps, TaskListState> {
    constructor(props: TaskListProps) {
        super(props)
        this.state = {
            visibleTasksCount: 4
        }
    }

    componentDidMount() {
        const taskListElement = document.getElementById('task-list')
        taskListElement?.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        const taskListElement = document.getElementById('task-list')
        taskListElement?.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const { visibleTasksCount } = this.state
        const { tasks } = this.props
        const taskListElement = document.getElementById('task-list')

        if (taskListElement) {
            const bottomReached = taskListElement.scrollHeight - taskListElement.scrollTop <= taskListElement.clientHeight

            if (bottomReached && visibleTasksCount < tasks.length) {
                this.setState({ visibleTasksCount: visibleTasksCount + 4 })
            }
        }
    }

    render() {
        const { tasks, toggleComplete, deleteTask } = this.props
        const { visibleTasksCount } = this.state

        const visibleTasks = tasks.slice(0, visibleTasksCount)

        return (
            <div
                id="task-list"
                className="overflow-y-auto h-64 overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            >
                <div className="space-y-4">
                    {visibleTasks.length > 0 ? (
                        visibleTasks.map(task => (
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
                {visibleTasksCount < tasks.length && (
                    <p className="text-gray-500 text-center">Подгружаем задачи...</p>
                )}
            </div>
        )
    }
}
