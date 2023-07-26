import {checkingAuthentication} from '../../../src/store/auth/thunks';
import {checkingCredentials} from '../../../src/store/auth/authSlice';

jest.mock('../../../src/firebase/providers');

describe('Test thunk', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should call checking credentials', async () => {

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    })
});