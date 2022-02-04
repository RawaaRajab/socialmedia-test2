import React from 'react';
import { FlatList } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import PostItem from '../../components/app/PostItem';

const UserPostsScreen = props => {
    const userPosts = useSelector(state => state.posts.userPosts);

    return <FlatList data={userPosts} keyExtractor={item => item.id} renderItem={itemData => <PostItem title={itemData.item.title}/> }/>;
};

export default UserPostsScreen;