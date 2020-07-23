import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import NavigationBar from './components/navigation_bar';

export default function App() {
  return (
    <PaperProvider>
      <NavigationBar/>
    </PaperProvider>
  );
}
