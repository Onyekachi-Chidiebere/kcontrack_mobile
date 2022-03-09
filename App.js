import React, {useEffect} from 'react';
import AppNavigator from './src/AppNavigator';
import RNBootSplash from "react-native-bootsplash";
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  useEffect(()=>{
RNBootSplash.hide({ fade: true });

},[])
	return <Provider store={store}>
      <AppNavigator />
  </Provider>
};

export default App;
