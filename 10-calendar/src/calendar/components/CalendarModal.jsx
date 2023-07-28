import Modal from 'react-modal';
import {useState} from "react";

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
    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        console.log('onCloseModal');
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen}
               onRequestClose={onCloseModal}
               style={customStyles}
               className="modal"
               overlayClassName="modal-fondo"
               closeTimeoutMS={200}>
            <h1>Hello</h1>
            <button onClick={onCloseModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input/>
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    );
}