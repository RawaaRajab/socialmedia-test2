import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import postsReducer from './store/reducers/posts';
import favouriteReducer from './store/reducers/favourite';
import AppNavigator from './navigation/appNavigator';

const rootReducer = combineReducers({
  posts: postsReducer,
  favourite: favouriteReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
