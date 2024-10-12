import { SEVERITY } from "../constants/severity.enun"
import { ITask, ITaskForm } from "../types/task.type"


export class TaskService {
  private static generateRandomId = (): string => {
    return Math.random().toString(36).substring(2, 9)
  }

  public static generateRandomTaskForm(): ITaskForm {
    const randomTitle = `Задача ${Math.random().toString(36).substring(7)}`
    const randomDescription = `Описание ${Math.random().toString(36).substring(7)}`
    return { title: randomTitle, description: randomDescription, severity: SEVERITY.URGENTLY }
  }

  public static createTask = (data: ITaskForm): ITask => {
    const currentTime = Date.now()
    return {
      id: this.generateRandomId(),
      ...data,
      done: false,
      createdAt: currentTime,
    }
  }

  public static deleteTask = (tasks: ITask[], id: string): ITask[] => {
    return tasks.filter((task) => task.id !== id)
  }
}
