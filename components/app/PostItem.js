import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Button
} from 'react-native';
import Colors from '../../constants/colors';

const PostItem = props => {

    let TouchableCMP = TouchableOpacity;

    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableCMP = TouchableNativeFeedback;
    }

    return (
        <View style={styles.post} >
            <View style={styles.touchable}>
                <TouchableCMP onPress={props.onViewPost} useForeground>
                    <View>
                        <View style={styles.description} >
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.description}>{props.description}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button title='view full post'
                                onPress={props.onViewPost}
                                color={Colors.primary}
                            />
                            <Button title='share'
                                onPress={props.onShareToProfile}
                                color={Colors.primary}
                            />
                            <Button title='favourite'
                                onPress={props.onAddToFavourite}
                                color={Colors.primary}
                            />
                            <Button title='comment'
                                onPress={props.onWriteComment}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </TouchableCMP>
            </View>
        </View >
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
        height: 200,
        margin: 20
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 4,
        height: '20%',
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
        padding: 10,
        height: '50%',

    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '75%',
    },
});

export default PostItem;
