import { Component, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { ERRORS } from '../../constants/errors.enum'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { SEVERITY } from '../../constants/severity.enun'
import { ITaskForm } from '../../types/task.type'

interface FormProps {
  addTask: (data: ITaskForm) => void
}

interface FormState {
  title: string
  description: string
  severity: SEVERITY
  error: string | null
}

export default class Form extends Component<FormProps, FormState> {
  state: FormState = {
    title: '',
    description: '',
    severity: SEVERITY.AVERAGE,
    error: null
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const field = e.target.placeholder.includes('название') ? 'title' : 'description'
    this.setState({ [field]: value } as Pick<FormState, keyof FormState>)
  }

  handleSeverityChange = (e: MouseEvent<HTMLButtonElement>, severity: SEVERITY) => {
    e.preventDefault()
    this.setState({ severity })
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { title, description, severity } = this.state

    if (title.trim() === '') {
      this.setState({ error: ERRORS.EMPTY_TITLE })
      return
    }

    if (title.trim() !== title) {
      this.setState({ error: ERRORS.INVALID_TITLE })
      return
    }

    this.props.addTask({ title, description, severity })
    this.setState({ title: '', description: '', severity: SEVERITY.AVERAGE, error: null })
  }

  render() {
    const { title, description, severity, error } = this.state

    return (
      <form onSubmit={this.handleSubmit} className="flex flex-col items-center">
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <Input
          value={title}
          onChange={this.handleChange}
          placeholder="Введите название задачи"
        />
        <Input
          value={description}
          onChange={this.handleChange}
          placeholder="Введите описание задачи"
        />

        <div className="flex my-4">
          <Button
            name="Срочно"
            className={`mr-2 ${severity === SEVERITY.URGENTLY ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={(e) => this.handleSeverityChange(e, SEVERITY.URGENTLY)}
          />
          <Button
            name="Средне"
            className={`mr-2 ${severity === SEVERITY.AVERAGE ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={(e) => this.handleSeverityChange(e, SEVERITY.AVERAGE)}
          />
          <Button
            name="Не срочно"
            className={`${severity === SEVERITY.NOT_URGENT ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={(e) => this.handleSeverityChange(e, SEVERITY.NOT_URGENT)}
          />
        </div>

        <Button name="Добавить" className="bg-gray-400 text-white px-4 py-2" onClick={this.handleSubmit} />
      </form>
    )
  }
}
