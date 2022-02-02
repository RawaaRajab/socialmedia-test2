import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import PostsOverviewScreen from '../screens/profile/PostsOverView';
import colors from '../constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
