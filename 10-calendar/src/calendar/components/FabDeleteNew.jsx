import {useCalendarStore, useUiStore} from '../../hooks';
import {addHours} from 'date-fns';

export const FabDeleteNew = () => {
    const {} = useCalendarStore();

    const handleClickNew = () => {

    };

    return (
        <button className="btn btn-danger fab-danger"
                onClick={handleClickNew}>
            <i className="fas fa-trash-alt"></i>
        </button>
    );
}