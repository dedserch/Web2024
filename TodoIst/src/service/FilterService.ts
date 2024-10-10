import { SEVERITY } from "../constants/severity.enun"
import { ITask } from "../types/task.type"


export class FilterService {

  static hideCompleted = (tasks: ITask[], hideCompleted: boolean): ITask[] =>
    hideCompleted ? tasks.filter(task => !task.done) : tasks

  static filterBySubstring = (tasks: ITask[], query: string): ITask[] => {
    const lowerQuery = query.trim().toLowerCase()
    return !lowerQuery
      ? tasks
      : tasks.filter(task =>
          task.title.toLowerCase().includes(lowerQuery) || 
          task.description.toLowerCase().includes(lowerQuery)
        )
  }

  static filterBySeverity = (tasks: ITask[], severities: SEVERITY[]): ITask[] =>
    severities.length === 0
      ? tasks
      : tasks.filter(task => severities.includes(task.severity))
}
