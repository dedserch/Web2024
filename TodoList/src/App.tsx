import { Component } from 'react'
import { ITask } from './types/task.types'
import Form from './components/TodoList/Form/Form'
import { TasksList } from './components/TodoList/TasksList/TasksList'

interface AppState {
    tasks: ITask[]
}

export default class App extends Component<{}, AppState> {
    state: AppState = {
        tasks: []
    }

    addTask = (title: string, description: string) => {
        const newTask: ITask = {
            id: Date.now(),
            title,
            description,
            isCompleted: false,
            createdAt: Date.now()
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    toggleComplete = (id: number) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        }))
    }

    deleteTask = (id: number) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }

    render() {
        const { tasks } = this.state

        return (
            <div className="mx-auto my-10 max-w-4xl p-4">
                <h1 className="text-center text-4xl font-bold mb-6">TODO LIST</h1>

                <Form addTask={this.addTask} />

                <TasksList
                    tasks={tasks}
                    toggleComplete={this.toggleComplete}
                    deleteTask={this.deleteTask}
                />
            </div>
        )
    }
}
