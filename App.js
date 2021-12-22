import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/navigation/Router';
import 'react-native-url-polyfill/auto';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
};

export default App;
