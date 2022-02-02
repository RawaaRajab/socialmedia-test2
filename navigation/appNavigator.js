
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { Platform } from 'react-native';

import PostsOverviewScreen from '../screens/profile/PostsOverViewScreen';
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
