import './index.css'
import IUser from '../../interfaces/IUser'

function User(props: IUser) {
    return (
        <div
            className="my_coach_user"
            data-testid={props.id ? 'testUser-' + props.id : ''}
        >
            <p
                className="my_coach_user_name"
                data-testid={props.id ? 'testUserName-' + props.id : ''}
            >
                {props.name}
            </p>
            <p
                className="my_coach_user_score"
                data-testid={props.id ? 'testUserScore-' + props.id : ''}
            >
                {props.score}
            </p>
        </div>
    )
}

export default User
