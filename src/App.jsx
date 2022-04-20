import Machine from './components/machine/Machine';
import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import { useState } from 'react';
import './app.scss';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Machine />
      </div>
    </div>
  );
}

export default App;
