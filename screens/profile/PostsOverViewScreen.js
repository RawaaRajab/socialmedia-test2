import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import PostItem from '../../components/app/PostItem';
import * as favouriteActions from '../../store/actions/favourite';
import HeaderButton from '../../components/UI/HeaderButton';

const PostsOverviewScreen = props => {
    const posts = useSelector(state => state.posts.otherPosts);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PostItem
                    title={itemData.item.title}
                    ownerId={itemData.item.ownerId}
                    description={itemData.item.description}
                    onViewPost={() => {
                        props.navigation.navigate('PostDescription', {
                            postId: itemData.item.id,
                            postDescription: itemData.item.description
                        }); //or just pass the name //{ routeName: 'PostDescription' }
                    }}
                    onAddToFavourite={() => {
                        dispatch(favouriteActions.addToFavourite(itemData.item));
                    }}
                    onShareToProfile={() => { }}
                    onWriteComment={() => { }}
                />
            )}
        />
    );
};

PostsOverviewScreen.navigationOptions = {
    headerTitle: 'Home',
    headerRight: <HeaderButtons>
        <Item titel='Favourite'
            iconName={Platform.OS === 'android' ? 'md-favourite' : 'ios-favourite'}
            onPress={() => {
                navData.navigation.navigate('Favourite')
            }} />
    </HeaderButtons>,
};

export default PostsOverviewScreen;