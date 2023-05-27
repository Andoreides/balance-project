const initialState = {
    yourName: 'Anonymous',
    yourSurname: 'Anonymous',
    avatarUrl: 'https://avatars.githubusercontent.com/u/102199209?v=4',
}


export const CHANGE_YOUR_NAME = 'CHANGE_YOUR_NAME';
export const CHANGE_YOUR_SURNAME = 'CHANGE_YOUR_SURNAME';
export const CHANGE_AVATAR_URL = 'CHANGE_AVATAR_URL';

export const profileReducer = (state  = initialState, action) => {
    switch (action.type) {
        case CHANGE_YOUR_NAME: {
            return {...state, yourName: action.payload}
        }
        case CHANGE_YOUR_SURNAME: {
            return {...state, yourSurname: action.payload}
        }
        case CHANGE_AVATAR_URL: {
            return {...state, avatarUrl: action.payload}
        }
        default: return state;
    }
}