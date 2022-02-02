import POSTS from '../../data/dummy-data';

const initialState = {
    otherPosts: POSTS,
    userPosts: POSTS.filter(prod => prod.ownerId == 'ownerId1')
};

export default (state = initialState, action) => {
    return state;
};