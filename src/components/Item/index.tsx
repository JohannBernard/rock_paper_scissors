import './index.css'
import IItem from '../../interfaces/IItem'
import GameHelper from '../../helpers/GameHelper'

interface IItemProps {
    item?: IItem
    opponent?: IItem
    id?: number
}

function Item(props: IItemProps) {
    const wonStatus = GameHelper.wonStatus(props.item, props.opponent)
    return props.item ? (
        <div
            className={
                'my_coach_item' +
                (wonStatus === 1 ? ' my_coach_item_win' : '') +
                (wonStatus === -1 ? ' my_coach_item_lost' : '')
            }
            data-testid={props.id ? 'testItem-' + props.id : ''}
        >
            <p
                className="my_coach_item_icon"
                data-testid={props.id ? 'testItemIcon-' + props.id : ''}
            >
                {props.item.icon}
            </p>
            <p
                className="my_coach_item_label"
                data-testid={props.id ? 'testItemLabel-' + props.id : ''}
            >
                {props.item.label}
            </p>
        </div>
    ) : (
        <></>
    )
}

export default Item
