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
} from '../actions/Coments/types';

const initialState = {
    comments: [],
    user_comments: [],
    search_comments: [],
    comment_created: null,
    loading: false,
    error: null
};

export default function comments(state = initialState, action) {
    const { type, payload } = action;
    
    switch(type) {
        case GET_COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: payload, // Asignamos los comentarios obtenidos a la lista de comentarios
                loading: false
            };
        case GET_COMMENT_LIST_FAIL:
            return {
                ...state,
                comments: [],
                error: 'Failed to load comments',
                loading: false
            };
        case GET_COMMENT_LIST_BY_USER_SUCCESS:
            return {
                ...state,
                user_comments: payload, // Asignamos los comentarios por usuario
                loading: false
            };
        case GET_COMMENT_LIST_BY_USER_FAIL:
            return {
                ...state,
                user_comments: [],
                error: 'No comments found for this user',
                loading: false
            };
        case SEARCH_COMMENT_SUCCESS:
            return {
                ...state,
                search_comments: payload, // Asignamos los comentarios encontrados por búsqueda
                loading: false
            };
        case SEARCH_COMMENT_FAIL:
            return {
                ...state,
                search_comments: [],
                error: 'No matching comments found',
                loading: false
            };
        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comment_created: payload, // Asignamos el comentario recién creado
                loading: false
            };
        case CREATE_COMMENT_FAIL:
            return {
                ...state,
                comment_created: null,
                error: 'Failed to create comment',
                loading: false
            };
        case UPDATE_COMMENTS:
            return {
                ...state,
                comments: [...state.comments, payload]
            };
        default:
            return state;
    }
}
