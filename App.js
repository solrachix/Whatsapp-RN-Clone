import React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from '$root/routes';
import {name as appName} from './app.json';

import usePersistedState from '$root/utils/usePersistedState';
import Light from '$root/styles/themes/Light';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', Light);
  console.log("theme", theme);
  return (
    <ThemeProvider theme={theme}>
      <Routes/> 
    </ThemeProvider>   
  );
}

console.disableYellowBox = false

AppRegistry.registerComponent(appName, () => App);
