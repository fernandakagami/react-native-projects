import { StatusBar, SafeAreaView, View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          "MontserratRegular": Montserrat_400Regular,
          "MontserratBold": Montserrat_700Bold,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppReady(true)
      }
    })()
  }, [])

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync()
    }
  }, [appReady])

  if (!appReady) {
    return null
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View onLayout={onLayout}>
        <StatusBar />
        <Cesta {...mock} />
      </View>
    </SafeAreaView>
  );
}

