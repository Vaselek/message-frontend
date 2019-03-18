import axios from "../../axios-message";

export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const CHANGE_AUTHOR = 'CHANGE_AUTHOR';


export const createMessageFailure = (error) => ({type: 'CREATE_MESSAGE_FAILURE', error});
export const fetchMessagesSuccess = (messages) => ({type: 'FETCH_MESSAGES_SUCCESS', messages});
export const changeMessage = (message) => {
    return ({type: 'CHANGE_MESSAGE', message});
}
export const changeAuthor = (author) => ({type: 'CHANGE_AUTHOR', author});

export const createMessage = (message) => {
    return dispatch => {
        return axios.post('/messages', message).then(
            null,
            (error) => dispatch(createMessageFailure(error.response.data.error))
        )
    }
}

export const fetchMessages = () => {
    return dispatch => {
        return axios.get('/messages').then(
            (response) => {
                return dispatch(fetchMessagesSuccess(response.data))
            }
        )
    }
}