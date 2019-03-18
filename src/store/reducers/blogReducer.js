import {CHANGE_AUTHOR, CHANGE_MESSAGE, CREATE_MESSAGE_FAILURE, FETCH_MESSAGES_SUCCESS} from "../actions/blogactions";

const initialState = {
    message: {
        message: '',
        author: ''
    },
    error: null,
    messages: []
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case CHANGE_MESSAGE:
            return {
                ...state,
                message: {
                    ...state.message,
                    message: action.message
                }
            }
        case CHANGE_AUTHOR:
            return {
                ...state,
                message: {
                    ...state.message,
                    author: action.author
                }
            }
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }
}

export default blogReducer;