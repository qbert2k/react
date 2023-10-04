import {render, screen} from '@testing-library/react';
import {FabDelete} from '../../../src/calendar/components/FabDelete';
import {useCalendarStore} from '../../../src/hooks/useCalendarStore';
import {useUiStore} from "../../../src/hooks/useUiStore";

jest.mock('../../../src/hooks/useCalendarStore');
jest.mock('../../../src/hooks/useUiStore');

describe('Test <FabDelete/>', () => {

    test('should render the component', () => {
        useCalendarStore.mockReturnValue({
            hasEventSelected: false
        });
        useUiStore.mockReturnValue({
            isDateModalOpen: false
        });

        render(<FabDelete/>);

        const btn = screen.getByLabelText('btn-delete');
        expect(btn.classList).toContain('btn');
        expect(btn.classList).toContain('btn-danger');
        expect(btn.classList).toContain('fab-danger');
        expect(btn.style.display).toBe('none');
    });

    test('should show the button if there is an active event', () => {
        useCalendarStore.mockReturnValue({
            hasEventSelected: true
        });
        useUiStore.mockReturnValue({
            isDateModalOpen: false
        });

        render(<FabDelete/>);
        screen.debug();

        const btn = screen.getByLabelText('btn-delete');
        expect(btn.style.display).toBe('');
    });
});