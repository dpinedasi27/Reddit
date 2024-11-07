import axios from 'axios';
import {
    GET_COMMENT_LIST_SUCCESS,
    GET_COMMENT_LIST_FAIL,
    GET_COMMENT_LIST_BY_USER_SUCCESS,
    GET_COMMENT_LIST_BY_USER_FAIL,
    SEARCH_COMMENT_SUCCESS,
    SEARCH_COMMENT_FAIL,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL,
    UPDATE_COMMENTS
} from './types';

// Obtener todos los comentarios
export const get_comments = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/comment/comments`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_COMMENT_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_COMMENT_LIST_FAIL
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_COMMENT_LIST_FAIL
        });
    }
};

// Obtener comentarios por usuario
export const get_comment_by_user = (username) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/comment/user/${username}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_COMMENT_LIST_BY_USER_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_COMMENT_LIST_BY_USER_FAIL
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_COMMENT_LIST_BY_USER_FAIL
        });
    }
};

// Buscar comentarios
export const search_comment = (searchTerm) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/comment/search?search_term=${searchTerm}`, config);
        if (res.status === 200) {
            dispatch({
                type: SEARCH_COMMENT_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: SEARCH_COMMENT_FAIL
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: SEARCH_COMMENT_FAIL
        });
    }
};

export const create_comment = (user, avatar, text, timestamp, parent_comment = null) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    const body = JSON.stringify({
        user,
        avatar,
        text,
        timestamp,
        parent_comment
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/comment/create`, body, config);
        if (res.status === 201) {
            dispatch({
                type: CREATE_COMMENT_SUCCESS,
                payload: res.data
            });

            // Actualizamos el estado de los comentarios en el store
            dispatch({
                type: UPDATE_COMMENTS,
                payload: res.data
            });
        } else {
            dispatch({
                type: CREATE_COMMENT_FAIL
            });
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: CREATE_COMMENT_FAIL
        });
    }
};
