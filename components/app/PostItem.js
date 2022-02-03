import React from 'react';
import { View, Text, StyleSheet, shadowOffset } from 'react-native';
import { Button } from 'react-native';

const PostItem = props => {
    return (
        <View style={styles.post}>
            <Text>{props.title}</Text>
            <Text>{props.description}</Text>
            <View>
                <Button title='view full post' onPress={props.onViewPost} />
                <Button title='share' onPress={props.onShareToProfile} />
                <Button title='favourite' onPress={props.onAddToFavourite} />
                <Button title='comment' onPress={props.onWriteComment} />
            </View>
        </View>
    );
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
        height: 300,
        margin: 20
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
    },
    description: {
        fontSize: 14,
        marginVertical: 3
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default PostItem;
