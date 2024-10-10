import { Component, ChangeEvent } from 'react'

interface InputProps {
    value: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default class Input extends Component<InputProps> {
    render() {
        const { value, onChange, placeholder } = this.props
        return (
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 mr-2 border-gray-300 border mb-2"
            />
        )
    }
}
