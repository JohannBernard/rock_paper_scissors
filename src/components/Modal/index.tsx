import './index.css'
import Button from '../Button'

interface IModal {
    label?: string
    open: boolean
    onClickCustom?: React.MouseEventHandler<HTMLButtonElement>
    id?: number
}

function Modal(props: IModal) {
    return (
        <div
            id="open-modal"
            className={
                'modal_window' + (props.open ? ' modal_window_visible' : '')
            }
            data-testid={props.id ? 'testModal-' + props.id : ''}
        >
            <div className="modal_container">
                <div
                    className="modal_label"
                    data-testid={props.id ? 'testModalLabel-' + props.id : ''}
                >
                    {props.label}
                </div>
                <Button
                    label="Recommencer"
                    onClickCustom={props.onClickCustom}
                />
            </div>
        </div>
    )
}

export default Modal
