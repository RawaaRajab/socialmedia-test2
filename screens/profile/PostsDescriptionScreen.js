import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PostsDescriptionScreen = props => {

    const postId = props.navigation.getParam('postId');
    const selectedPost = useSelector(state =>
        state.posts.otherPosts.find(prod => prod.id == postId)
    );

    return (
        <ScrollView>
            <View>
                <Text>{selectedPost.description}</Text>
            </View>
            <View style={styles.actions}>
                <Button title='Share' onPress={() => { }} />
                <Button title='Favourite' onPress={() => { }} />
                <Button title='Comment' onPress={() => { }} />
            </View>
        </ScrollView>
    );

    PostsDescriptionScreen.navigationOptions = navData => {
        return {
            headerTitle: navData.navigation.getParam('postTitle')
        };
    };

};

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '25%',
    },
});

export default PostsDescriptionScreen;