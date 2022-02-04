import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as favouriteActions from '../../store/actions/favourite';

const PostsDescriptionScreen = props => {

    const postId = props.navigation.getParam('postId');
    const selectedPost = useSelector(state =>
        state.posts.otherPosts.find(prod => prod.id == postId)
    );

    const dispatch = useDispatch;

    return (
        <ScrollView style={styles.post}>
            {/* <View style={styles.description}> */}
            <Text style={styles.description}>{selectedProduct.description}</Text>
            {/* </View> */}
            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title='Favourite' onPress={() => {
                        dispatch(favouriteActions.addToFavourite(selectedPost));
                    }} />
                <Button
                    color={Colors.primary}
                    title='Comment' onPress={() => { }} />
                <Button
                    color={Colors.primary}
                    title='Share' onPress={() => { }} />
            </View>
        </ScrollView>
    );
};

PostsDescriptionScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('postTitle')
    };
};

const styles = StyleSheet.create({
    post: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 200,
        margin: 20
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
        fontFamily: 'open-sans',
        height: '50%',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80%',
    },
});

export default PostsDescriptionScreen;