import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { Platform } from 'react-native';

import PostsOverviewScreen from '../screens/profile/PostsOverView';
import Colors from '../constants/colors';

const PostsNavigator = createStackNavigator({
    PostsOverview: PostsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(PostsNavigator);
