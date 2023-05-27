const initialState = {
    post: []
}

export const CHANGE_POST = 'CHANGE_POST';

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_POST': {
            return {...state, post: [...state.post, action.payload]};
        }
        default: return state;
    }
}