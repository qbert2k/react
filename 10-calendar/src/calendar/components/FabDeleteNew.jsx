import {useCalendarStore} from '../../hooks';

export const FabDeleteNew = () => {
    const {deleteEvent} = useCalendarStore();

    const handleDelete = () => {
        deleteEvent();
    };

    return (
        <button className="btn btn-danger fab-danger"
                onClick={handleDelete}>
            <i className="fas fa-trash-alt"></i>
        </button>
    );
}