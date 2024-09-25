import { Component, ChangeEvent, FormEvent } from 'react'
import { ERRORS } from '../../../types/errors'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

interface FormProps {
  addTask: (title: string, description: string) => void
}

interface FormState {
  title: string
  description: string
  error: string | null
}

export default class Form extends Component<FormProps, FormState> {
  state: FormState = {
      title: '',
      description: '',
      error: null
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      const field = e.target.placeholder.includes('название') ? 'title' : 'description'
      this.setState({ [field]: value } as Pick<FormState, keyof FormState>)
  }

  handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      const { title, description } = this.state

      if (title.trim() === '') {
          this.setState({ error: ERRORS.EMPTY_TITLE })
          return
      }

      if (title.trim() !== title) {
          this.setState({ error: ERRORS.INVALID_TITLE })
          return
      }

      this.props.addTask(title, description)
      this.setState({ title: '', description: '', error: null })
  }

  render() {
      const { title, description, error } = this.state

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

              <Button name="Добавить" className="bg-gray-400 text-white px-4 py-2" onClick={this.handleSubmit} />
          </form>
      )
  }
}
