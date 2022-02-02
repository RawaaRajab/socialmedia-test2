import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import postsReducer from './store/reducers/posts';
import AppNavigator from './navigation/appNavigator';

const rootReducer = combineReducers({
  posts: postsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
