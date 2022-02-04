import React from 'react';
import {
    // createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import{
createStackNavigator,
// createDrawerNavigator,
// createAppContainer
} from 'react-navigation-stack';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import PostsOverviewScreen from '../screens/profile/PostsOverViewScreen';
import PostsDescriptionScreen from '../screens/profile/PostsDescriptionScreen';
import FavouriteScreen from '../screens/profile/FavouriteScreen';
import UserPostsScreen from '../screens/user/UserPsotsScreen';
import EditPostsScreen from '../screens/user/EditPostsScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
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
};

const PostsNavigator = createStackNavigator(
    {
        PostsOverview: PostsOverviewScreen,
        PostDescription: PostsDescriptionScreen,
        Favourite: FavouriteScreen,
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const FavouritesNavigator = createStackNavigator(
    {
      Favourites: FavouritesNavigator
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );

  const AdminNavigator = createStackNavigator(
    {
      UserPosts: UserPostsScreen,
      EditPosts: EditPostsScreen
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );


const AppNavigator = createDrawerNavigator(
    {
      Posts: PostsNavigator,
      Favourites: FavouritesNavigator,
      Admin: AdminNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.primary
      }
    }
  );
  

export default createAppContainer(AppNavigator);
