import { Component, ChangeEvent } from 'react';

interface CheckBoxProps {
    isDone?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default class CheckBox extends Component<CheckBoxProps> {
    render() {
        const { isDone, onChange } = this.props
        return (
            <input
                type="checkbox"
                defaultChecked={isDone}
                onChange={onChange}
                className="mr-2 cursor-pointer"
            />
        )
    }
}
