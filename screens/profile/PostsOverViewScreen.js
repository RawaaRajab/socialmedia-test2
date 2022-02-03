import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import PostItem from '../../components/app/PostItem';

const PostsOverviewScreen = props => {
    const posts = useSelector(state => state.posts.otherPosts);
    return (
        <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PostItem
                    title={itemData.item.title}
                    ownerId={itemData.item.ownerId}
                    description={itemData.item.description}
                    onViewPost={() => { }}
                    onShareToProfile={() => { }}
                    onAddToFavourite={() => { }}
                    onWriteComment={() => { }}
                />
            )}
        />
    );
};

PostsOverviewScreen.navigationOptions = {
    headerTitle: 'All Posts'
};

export default PostsOverviewScreen;