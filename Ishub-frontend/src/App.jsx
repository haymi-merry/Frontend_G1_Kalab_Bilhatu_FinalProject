import { useState } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Community from './Components/Community';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
       <> <Home />
       <Community/>
       </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
