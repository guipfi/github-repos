import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import Home from './src/screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
