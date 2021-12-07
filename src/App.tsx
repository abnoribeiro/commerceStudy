import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts,
  Ruda_400Regular,
  Ruda_500Medium,
  Ruda_600SemiBold,
  Ruda_700Bold
} from '@expo-google-fonts/ruda';

import {Container} from './styled';
import GlobalContext from './hooks';
import { AppRoutes } from './routes/app.routes';
import theme from './_theme/themes';
import themes from './_theme/themes';

const App: React.FC = () => {
  
  const [fontsLoaded] = useFonts({
    Ruda_400Regular,
    Ruda_500Medium,
    Ruda_600SemiBold,
    Ruda_700Bold
  })
  
  if(!fontsLoaded){
    return (<></>)
  }

  return (
    <GlobalContext>
      <StatusBar
        hidden = {false}
      />
      <ThemeProvider theme={themes}>
        <Container>
          <NavigationContainer>
            <AppRoutes/>
          </NavigationContainer>
        </Container>
      </ThemeProvider>
    </GlobalContext>
  );
};

export default App;