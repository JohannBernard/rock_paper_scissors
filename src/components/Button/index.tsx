import './index.css'

interface IButtonProps {
    label: string
    onClickCustom?: React.MouseEventHandler<HTMLButtonElement>
    icon?: boolean
    title?: string
}

function Button(props: IButtonProps) {
    return (
        <button
            onClick={props.onClickCustom}
            className={
                'my_coach_button' + (props.icon ? ' my_coach_button_icon' : '')
            }
            data-testid="testButton"
            title={props.title}
        >
            {props.label}
        </button>
    )
}

export default Button
