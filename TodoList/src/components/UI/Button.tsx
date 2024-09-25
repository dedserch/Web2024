import { Component, MouseEvent } from 'react';

interface ButtonProps {
    name: string
    className?: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default class Button extends Component<ButtonProps> {
    render() {
        const { className, onClick, name } = this.props;
        return (
            <button
                className={className
                    ? className
                    : `bg-blue-500 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded`}
                onClick={onClick}
            >
                {name}
            </button>
        )
    }
}
