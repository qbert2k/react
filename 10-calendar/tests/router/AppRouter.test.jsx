import {render, screen} from '@testing-library/react';
import {useAuthStore} from '../../src/hooks/useAuthStore';
import {AppRouter} from '../../src/router';

jest.mock('../../src/hooks/useAuthStore');

describe('Test AppRouter', () => {

    const mockCheckAuthToken = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should call checkAuthToken and show the loading message', () => {
        useAuthStore.mockReturnValue({
            status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render(<AppRouter/>);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(mockCheckAuthToken).toHaveBeenCalled();

    });
});