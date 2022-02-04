import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import FavourieItem from '../../components/app/FavouriteItem';


const FavouriteScreen = props => {

    const favouriteItems = useSelector(state => {
        const transformedFavouriteItems = [];
        for (const key in state.favourite.items) {
            transformedFavouriteItems.push({
                postId: key,
                postTitle: state.favourite.items[key].postTitle,
            });
        }
        return transformedFavouriteItems;
    });

    return (
        <View style={styles.screen}>
            <FlatList
                data={favouriteItems}
                keyExtractor={item => item.postId}
                renderItem={itemData => (
                    <FavourieItem
                        title={itemData.item.postTitle}
                        onRemove={() => { }}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default FavouriteScreen;