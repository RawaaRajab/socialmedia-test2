export const ADD_TO_FAVOUTITE = 'ADD_TO_FAVOUTITE';

export const addToFavourite = post =>{
    return {type: ADD_TO_FAVOUTITE, post: post};
};