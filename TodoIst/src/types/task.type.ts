import { SEVERITY } from "../constants/severity.enun"

export interface ITask {
  id: string
  title: string
  description: string
  done: boolean
  severity: SEVERITY
  createdAt: number
}

export interface ITaskForm {
  title: string
  description: string
  severity: SEVERITY
}
