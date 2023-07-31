import {useCalendarStore, useUiStore} from '../../hooks';

export const FabDeleteNew = () => {
    const {deleteEvent, hasEventSelected} = useCalendarStore();
    const {isDateModalOpen} = useUiStore();

    const handleDelete = () => {
        deleteEvent();
    };

    return (
        <button className="btn btn-danger fab-danger"
                onClick={handleDelete}
                style={{
                    display: hasEventSelected && !isDateModalOpen ? '' : 'none'
                }}>
            <i className="fas fa-trash-alt"></i>
        </button>
    );
}