import React from "react";
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const PostsOverviewScreen = props => {
    const posts = useSelector(state => state.posts.otherPosts);
    return (
        <FlatList
            data={posts}
            renderItem={itemData => <Text>{itemData.item.title}</Text>}
        />
    );
};

export default PostsOverviewScreen;