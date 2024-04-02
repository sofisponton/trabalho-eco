import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'
import useFonts from './components/fonts';
import Router from './Router';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if(!IsReady){
    return(
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
        />
    )
  }
  return <Router />;
}

