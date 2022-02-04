import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import FavourieItem from '../../components/app/FavouriteItem';
import * as favouriteActions from '../../store/actions/favourite';

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
                        onRemove={() => {
                            dispatch(favouriteActions.removeFromFavourite(itemData.item.postId));
                         }}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default FavouriteScreen;