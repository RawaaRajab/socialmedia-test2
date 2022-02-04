import { ADD_TO_FAVOUTITE } from '../actions/favourite';
import FavouriteList from '../../models/favourite-item';

const initialState = {
    items: {},
    tatalFavs: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOUTITE:
            const addedPost = action.post;
            const prodTitle = addedPost.title;

            let updatedOrNewFavouriteItem;

            if (state.items[addedProduct.id]) {
                // already liked the post 
                updatedOrNewFavouriteItem = new FavouriteList(
                    state.items[addedPost.id].quantity + 1,
                    prodTitle,
                );
            } else {
                updatedOrNewFavouriteItem = new FavouriteList(1, prodTitle);
            }
            return {
                ...state,
                items: { ...state.items, [addedPost.id]: updatedOrNewFavouriteItem },
                // totalFavs: state.totalFavst + prodPrice
            };
    }
    return state;
};