import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Onboarding } from './screens/Onboarding';
import { Login } from './screens/Login';
import { Cadastro } from './screens/Cadastro';
import { Home } from './screens/Home';
import { Products } from './screens/Products';
import { Contact } from './screens/Contact';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <Onboarding onNavigate={handleNavigate} />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'cadastro':
        return <Cadastro onNavigate={handleNavigate} />;
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Onboarding onNavigate={handleNavigate} />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderScreen()}
    </SafeAreaView>
  );
}