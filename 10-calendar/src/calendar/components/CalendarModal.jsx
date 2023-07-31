import {useEffect, useMemo, useState} from 'react';
import Modal from 'react-modal';
import {addHours, differenceInSeconds} from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import {useCalendarStore, useUiStore} from '../../hooks';

registerLocale('es', es);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const {isDateModalOpen, closeDateModal} = useUiStore();
    const {activeEvent, startSavingEvent} = useCalendarStore();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date, 2)
    });

    const titleClass = useMemo(() => {
        if (!formSubmitted) return '';

        return (formValues.title.length > 0)
            ? ''
            : 'is-invalid';
    }, [formValues.title, formSubmitted]);

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValues({
                ...activeEvent
            });
        }
    }, [activeEvent]);

    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        });
    };

    const onCloseModal = () => {
        closeDateModal();
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true)

        const difference = differenceInSeconds(formValues.end, formValues.start);
        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Date diff error', 'Review the start and end dates', "error");
            return;
        }

        if (formValues.title.length <= 0) {
            console.log('Title is mandatory');
            return;
        }

        console.log(formValues);

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmitted(false)
    };

    return (
        <Modal isOpen={isDateModalOpen}
               onRequestClose={onCloseModal}
               style={customStyles}
               className="modal"
               overlayClassName="modal-fondo"
               closeTimeoutMS={200}>
            <h1> Nuevo evento </h1>
            <hr/>
            <form onSubmit={onSubmit}
                  className="container">
                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker selected={formValues.start}
                                onChange={(event) => onDateChanged(event, 'start')}
                                dateFormat="Pp"
                                showTimeSelect
                                locale={es}
                                timeCaption="Hora"
                                className="form-control"/>
                </div>
                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker selected={formValues.end}
                                onChange={(event) => onDateChanged(event, 'end')}
                                dateFormat="Pp"
                                showTimeSelect
                                locale={es}
                                timeCaption="Hora"
                                minDate={formValues.start}
                                className="form-control"/>
                </div>
                <hr/>
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input type="text"
                           className={`form-control ${titleClass}`}
                           placeholder="Título del evento"
                           name="title"
                           value={formValues.title}
                           onChange={onInputChange}
                           autoComplete="off"/>
                    <small id="emailHelp" className="form-text text-muted">
                        Una descripción corta
                    </small>
                </div>
                <div className="form-group mb-2">
                    <textarea type="text"
                              className="form-control"
                              placeholder="Notas"
                              rows="5"
                              name="notes"
                              onChange={onInputChange}
                              value={formValues.notes}></textarea>
                    <small id="emailHelp" className="form-text text-muted">
                        Información adicional
                    </small>
                </div>

                <button type="submit"
                        className="btn btn-outline-primary btn-block">
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    );
}