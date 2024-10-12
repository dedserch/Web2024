import { Component } from "react"
import { ITask, ITaskForm } from "./types/task.type"
import { SEVERITY } from "./constants/severity.enun"
import { TaskService } from "./service/TaskService"
import { FilterService } from "./service/FilterService"
import { Sidebar } from "./components/Sidebar/Sidebar"
import Form from "./components/Form/Form"
import { TaskList } from "./components/TaskList/TaskList"
import { debounce } from "./utils/debounce"

interface AppState {
  tasks: ITask[]
  searchQuery: string
  hideCompleted: boolean
  selectedSeverities: SEVERITY[]
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    tasks: [],
    searchQuery: "",
    hideCompleted: false,
    selectedSeverities: [],
  }

  handleSearch = debounce(() => {
    this.setState((prevState) => ({ searchQuery: prevState.searchQuery }))
  }, 500)

  updateSearchQuery = (query: string) => {
    this.setState({ searchQuery: query }, () => this.handleSearch())
  }

  addTask = (data: ITaskForm) => {
    const newTask = TaskService.createTask(data)
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }))
  }

  addMultipleTasks = (tasks: ITaskForm[]) => {
    const newTasks = tasks.map((task) => TaskService.createTask(task))
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, ...newTasks],
    }))
  }

  deleteTask = (id: string) => {
    const updatedTasks = TaskService.deleteTask(this.state.tasks, id)
    this.setState({ tasks: updatedTasks })
  }

  toggleComplete = (id: string) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
      const sortedTasks = updatedTasks.sort((a, b) => {
        return a.done === b.done ? 0 : a.done ? 1 : -1
      })
      return { tasks: sortedTasks }
    })
  }

  toggleHideCompleted = () => {
    this.setState((prevState) => ({ hideCompleted: !prevState.hideCompleted }))
  }

  toggleSeverity = (severity: SEVERITY) => {
    this.setState((prevState) => {
      const selectedSeverities = prevState.selectedSeverities.includes(severity)
        ? prevState.selectedSeverities.filter((s) => s !== severity)
        : [...prevState.selectedSeverities, severity]
      return { selectedSeverities }
    })
  }

  render() {
    const { tasks, searchQuery, hideCompleted, selectedSeverities } = this.state
    const filteredTasks = FilterService.filterTasks(
      tasks,
      hideCompleted,
      searchQuery,
      selectedSeverities
    )

    return (
      <div className="mx-auto my-10 max-w-4xl p-4">
        <h1 className="text-center text-4xl font-bold mb-6">TODO LIST</h1>
        <Form addTask={this.addTask} addMultipleTasks={this.addMultipleTasks} />
        <div className="flex space-x-10 space-y-4">
          <Sidebar
            hideCompleted={hideCompleted}
            selectedSeverities={selectedSeverities}
            toggleHideCompleted={this.toggleHideCompleted}
            toggleSeverity={this.toggleSeverity}
            searchQuery={searchQuery}
            updateSearchQuery={this.updateSearchQuery}
            availableSeverities={Object.values(SEVERITY)}
          />
          <TaskList
            tasks={filteredTasks}
            toggleComplete={this.toggleComplete}
            deleteTask={this.deleteTask}
          />
        </div>
      </div>
    )
  }
}
