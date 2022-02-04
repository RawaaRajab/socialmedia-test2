export const ADD_TO_FAVOUTITE = 'ADD_TO_FAVOUTITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';

export const addToFavourite = post => {
    return { type: ADD_TO_FAVOUTITE, post: post };
};

export const removeFromFavourite = postId => {
    return { type: REMOVE_FROM_FAVOURITE, pid: postId };
};