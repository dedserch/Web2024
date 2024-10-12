import { SEVERITY } from "../constants/severity.enun"
import { ITask } from "../types/task.type"

export class FilterService {
  private static hideCompleted = (tasks: ITask[]): ITask[] =>
    tasks.filter((task) => !task.done)

  private static filterBySubstring = (
    tasks: ITask[],
    query: string
  ): ITask[] => {
    const lowerQuery = query.trim().toLowerCase()
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(lowerQuery) ||
        task.description.toLowerCase().includes(lowerQuery)
    )
  }

  private static filterBySeverity = (
    tasks: ITask[],
    severities: SEVERITY[]
  ): ITask[] => tasks.filter((task) => severities.includes(task.severity))

  public static filterTasks = (
    tasks: ITask[],
    hideCompleted: boolean,
    query: string,
    severities: SEVERITY[]
  ): ITask[] => {
    let filteredTasks = tasks

    if (hideCompleted) {
      filteredTasks = this.hideCompleted(filteredTasks)
    }

    if (query) {
      filteredTasks = this.filterBySubstring(filteredTasks, query)
    }

    if (severities.length > 0) {
      filteredTasks = this.filterBySeverity(filteredTasks, severities)
    }

    return filteredTasks
  }
}
