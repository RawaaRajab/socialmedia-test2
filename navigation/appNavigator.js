import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import PostsOverviewScreen from '../screens/profile/PostsOverViewScreen';
import PostsDescriptionScreen from '../screens/profile/PostsDescriptionScreen';
import Colors from '../constants/Colors';

const PostsNavigator = createStackNavigator(
    {
        PostsOverview: PostsOverviewScreen,
        PostDescription: PostsDescriptionScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
    }
);

export default createAppContainer(PostsNavigator);
