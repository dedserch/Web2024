import { ITask, ITaskForm } from "../types/task.type"

export class TaskService {

  private static generateRandomId = (): string => {
    return Math.random().toString(36).substring(2, 9)
  }

  public static createTask = (data: ITaskForm): ITask => {
    return {
      id: this.generateRandomId(),
      ...data,
      done: false
    }
  }

  public static deleteTask = (tasks: ITask[], id: string): ITask[] => {
    return tasks.filter((task) => task.id !== id)
  }
  
}
