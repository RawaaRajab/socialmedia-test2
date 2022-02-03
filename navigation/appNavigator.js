
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import PostsOverviewScreen from '../screens/profile/PostsOverViewScreen';
import Colors from '../constants/colors';

const PostsNavigator = createStackNavigator({
    PostsOverview: PostsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
    }
}
);

export default createAppContainer(PostsNavigator);
